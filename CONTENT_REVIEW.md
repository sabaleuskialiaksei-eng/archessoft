# Website and privacy review

Reviewed on 2026-10-02 against the app source and the public pages linked below.

## Updated

- Added Quick Jokes to the homepage with its verified App Store link. History V keeps its App Store link. Android editions are marked in development.
- Updated Simple Horoscope's homepage, privacy and support pages, marked it in development, and added an entertainment-only notice. There is no download link for this unreleased app.
- Redesigned the homepage and all three apps' privacy/support pages with local assets, responsive layouts, dark mode, keyboard navigation and Arabic right-to-left layout.
- Preserved the existing public routes and all 19 languages. Privacy text remains readable when JavaScript is disabled or browser storage is unavailable.
- Replaced blanket claims that no personal data is collected or privacy rights do not apply. Policies now describe Google advertising/consent SDK data, advertising modes, local preferences, optional purchases and supported Apple Watch transfers, support correspondence, retention, rights and GitHub Pages hosting.
- Removed a fixed 12+ claim. Store ratings vary by region and are distinct from intended audience. The US listings checked during this review show 13+.
- Standardized contact details to the Gmail address already used on the main website: sabaleuskialiaksei@gmail.com.
- Refreshed the separate historyv-privacy repository with matching content, a language directory and the previously missing Arabic support page.

## Before publishing / submitting an app

1. Confirm the support mailbox is monitored and that the stated intended audience and support-message retention practice match how you operate the apps.
2. Publish the repository changes using your GitHub Pages workflow. No remote changes were published during this review.
3. Check GitHub Pages for the older History V repository. https://chopyhoo.github.io/historyv-privacy/privacy-en.html returned HTTP 404 during this review; its Pages configuration could not be read with the current GitHub session. The updated files alone do not fix disabled or incorrectly configured hosting.
4. Use the live canonical privacy links below in App Store Connect, Google Play Console and the apps. The Android privacy-policy configuration was empty in the release audit; add a link in the app settings/menu where needed.
5. Match App Store privacy disclosures and Google Play Data safety answers to each actual release, its Google SDK versions and AdMob account settings. A policy update does not change SDK behavior or store declarations. Check consent messages and required privacy-options access in each platform's AdMob setup.
6. Review the policies again when Simple Horoscope's feature set is final. Current text qualifies optional/platform-dependent features to avoid promising they exist in every release.

## Canonical privacy links

- History V: https://archessoft.com/historyv/privacy/privacy.html
- Quick Jokes: https://archessoft.com/quickjokes/privacy/privacy.html
- Simple Horoscope: https://archessoft.com/simplehoroscope/privacy/privacy.html

Append `?lang=ru`, `?lang=ar` or another supported language code for a localized link.

## Hosting and advertising checks

The homepage, three main privacy routes and https://archessoft.com/app-ads.txt returned HTTP 200 during this review. The existing app-ads.txt publisher `pub-5993146182254027` matches the iOS app IDs checked. CNAME and app-ads.txt were preserved. Android app/ad-unit IDs still need their separate platform registrations as described in the Android release checklist.

## Validation

Checked 32 HTML pages for broken local links, duplicate IDs, missing images and horizontal overflow. Checked all 19 languages on each of the six multilingual pages, homepage widths from 320 to 1440 pixels, Arabic direction, dark mode, blocked local storage and privacy pages with JavaScript disabled. Browser checks passed. This verifies page behavior and reviewed content, not unobserved account settings or future releases.

## Reference material

- [Google Mobile Ads SDK: iOS data disclosure](https://developers.google.com/admob/ios/privacy/data-disclosure)
- [Google Mobile Ads SDK: Android data disclosure](https://developers.google.com/admob/android/privacy/play-data-disclosure)
- [Google: ad-serving modes](https://developers.google.com/admob/ios/privacy/ad-serving-modes)
- [GitHub privacy statement](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement)
- [History V App Store listing](https://apps.apple.com/us/app/history-v/id6749466519)
- [Quick Jokes App Store listing](https://apps.apple.com/us/app/quick-jokes/id6751600208)
