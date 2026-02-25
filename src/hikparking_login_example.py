#!/usr/bin/env python3
"""
HikParking (psp.hikparking.com) login example without browser automation.

Flow (captured from front-end JS):
1) POST /api/auth/v2/api/getChallengeCode  -> {salt, codeKey, codeValue}
2) passwordSHA256 = SHA256( SHA256(password + salt) + codeValue )
3) POST /api/auth/v2/api/user/login with account/password/codeKey
4) response.data.token is JWT token

Usage:
  python3 src/hikparking_login_example.py --account fxqg12345 --password Fxqg8424
"""

from __future__ import annotations

import argparse
import base64
import hashlib
import json
import random
import string
import time
import urllib.request
from typing import Dict, Any

BASE_URL = "https://psp.hikparking.com"


def _random_ns(length: int = 32) -> str:
    alphabet = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678"
    return "".join(random.choice(alphabet) for _ in range(length))


def _build_headers(token: str = "", client_type: str = "5") -> Dict[str, str]:
    auth_info = {
        "ns": _random_ns(32),
        "ts": int(time.time() * 1000),
        "auth-model": 1,
    }
    custom_payload = base64.b64encode(
        json.dumps(auth_info, separators=(",", ":")).encode("utf-8")
    ).decode("utf-8")

    return {
        "Content-Type": "application/json",
        "Accept": "application/json, text/plain, */*",
        "User-Agent": "Mozilla/5.0",
        "Origin": BASE_URL,
        "Referer": f"{BASE_URL}/#/login",
        "CustomPayload": custom_payload,
        "ClientType": client_type,
        "Authorization": token,
    }


def _post_json(path: str, payload: Dict[str, Any], headers: Dict[str, str]) -> Dict[str, Any]:
    req = urllib.request.Request(
        BASE_URL + path,
        data=json.dumps(payload).encode("utf-8"),
        method="POST",
        headers=headers,
    )
    with urllib.request.urlopen(req, timeout=30) as resp:
        return json.loads(resp.read().decode("utf-8"))


def _encode_password(raw_password: str, salt: str, code_value: str) -> str:
    inner = hashlib.sha256((raw_password + salt).encode("utf-8")).hexdigest()
    return hashlib.sha256((inner + code_value).encode("utf-8")).hexdigest()


def login(account: str, password: str, platform_type: str = "1") -> str:
    # Step 1: challenge
    challenge_resp = _post_json(
        "/api/auth/v2/api/getChallengeCode",
        {"account": account, "type": platform_type},
        _build_headers(),
    )
    if challenge_resp.get("code") != "200":
        raise RuntimeError(f"getChallengeCode failed: {challenge_resp}")

    challenge = challenge_resp["data"]
    code_key = challenge["codeKey"]
    salt = challenge["salt"]
    code_value = challenge["codeValue"]

    # Step 2: password encoding
    encoded_password = _encode_password(password, salt, code_value)

    # Step 3: login
    login_payload = {
        "account": account.strip(),
        "password": encoded_password,
        "codeKey": code_key,
        "verifyCodeId": "",
        "verifyCode": "",
    }
    login_resp = _post_json(
        "/api/auth/v2/api/user/login",
        login_payload,
        _build_headers(client_type="5"),
    )

    if login_resp.get("code") != "200":
        raise RuntimeError(f"login failed: {login_resp}")

    token = login_resp.get("data", {}).get("token")
    if not token:
        raise RuntimeError(f"login succeeded but token missing: {login_resp}")
    return token


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="HikParking login example")
    parser.add_argument("--account", required=True, help="login account")
    parser.add_argument("--password", required=True, help="login password")
    parser.add_argument(
        "--platform-type",
        default="1",
        choices=["1", "2"],
        help="platform type used by front-end (default: 1)",
    )
    args = parser.parse_args()

    token = login(args.account, args.password, args.platform_type)
    print("LOGIN_SUCCESS")
    print("jwtToken:", token)
