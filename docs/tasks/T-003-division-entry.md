# T-003 "Your division" entry: filter units by division
Owner: Claude Code
Status: ready after D-WEB-01
Depends on: D-WEB-01 (and T-000 if B)
Source: Blueprint Vision 2.6.2 §1 (two ways in), §4 chapter 11

## Goal
A division head opens the site, picks their division, and sees only the W/P units and pages that concern them.

## Do
- Content model: add optional `divisions: [id]` on units and a top-level `divisions: [{ id, name: {ja,en} }]` list. Validate both (known IDs only).
- Example content: the 10 divisions with names only (経営会議・役員, 財務経理部, 商品開発, 生産部, 品質管理, 物流, 店舗運営, 営業（法人）, マーケティング, 情報企画部). Map units using the "Related" column of master chapter 11 (Finance → P01, W09; Production → P07, P10, W07; …).
- UI: a division picker on the home page (buttons, keyboard-accessible). Route `#division-<id>` shows that division's units as cards, with a link back.
- Tests for the new validation.

## Do not
- Add the "what we ask" text from chapter 11 to the public example (internal only).

## Done when
- Desktop and phone screenshots of the picker and one division page, light and dark. Tests pass.
