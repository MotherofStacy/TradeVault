# Getting started with TradeVault

A walkthrough for your first day: what to set up, how to log a trade, and where everything lives. It takes about fifteen minutes to read, and the setup takes about as long.

> **Tip:** the first time you open TradeVault, a short tour inside the app shows you every page. You can take it again any time from **Settings → Take the tour**.

**Contents**
1. [Install it](#1-install-it)
2. [Your first five minutes](#2-your-first-five-minutes)
3. [Set up your accounts](#3-set-up-your-accounts)
4. [Log your trades](#4-log-your-trades)
5. [A daily routine that works](#5-a-daily-routine-that-works)
6. [Every page, in one line each](#6-every-page-in-one-line-each)
7. [Make it yours](#7-make-it-yours)
8. [Keep your journal safe](#8-keep-your-journal-safe)
9. [Questions people ask](#9-questions-people-ask)

---

## 1. Install it

**Windows**
1. Open the [latest release](https://github.com/motherofstacy/TradeVault/releases/latest).
2. Under **Assets**, download `TradeVault_…_x64-setup.exe` and run it.
3. If Windows says "Windows protected your PC", click **More info**, then **Run anyway**. Windows shows this for apps that aren't from a big publisher.

TradeVault updates itself from then on. When a new version is out, it offers **Update now**, backs up your journal first, and restarts on the new version.

**iPhone**
1. Open [motherofstacy.github.io/TradeVault](https://motherofstacy.github.io/TradeVault/) in **Safari**.
2. Tap **Share**, then **Add to Home Screen**.
3. Open it from the new icon on your home screen. It works offline after the first time.

Use both? Your phone and your PC each keep their own journal. You move entries between them with a backup file. See [Phone and PC](Phone-and-PC.md).

## 2. Your first five minutes

TradeVault opens with **example data**: trades, reviews, a premarket plan, life journal entries and goals, so every page has something to show. Click around first and see what the numbers and reports look like.

When you're ready to start for real:

1. **Clear the examples.** Press **Clear examples** in the banner at the top of the page.
2. **Add your accounts.** Open **Settings** (the gear at the top of the sidebar), then **Setup & data → Accounts**. See [section 3](#3-set-up-your-accounts).
3. **Enter your commission rates.** Go to **Setup & data → Trading** and type what your broker charges per contract for each market. TradeVault only uses the rates you enter. It never guesses fees.
4. **Choose a backup folder.**
   - In the Windows app, use **Setup & data → TradeVault app**.
   - In a browser, use **Setup & data → Backup & data**.
   - See [section 8](#8-keep-your-journal-safe).

Moving over from the browser version? Save a backup file there, then open **Setup & data → Backup & data** in TradeVault and use **Restore from backup file**. You can also drop the file onto the window.

## 3. Set up your accounts

Each account needs:

- **a name**
- **a starting balance**
- **a size multiple:** 1 is the same size as the trade you log, 0.5 is half and 2 is double

**Name it like your platform does.** Use the account name or number from your platform, like `APEX-123456-03`. When an import file has an Account column, each trade goes to the account with that name.

**Drawdown rule.** Pick the one your firm uses:

| Rule | How the limit moves |
|---|---|
| Fixed | Start balance minus the max drawdown. It never moves. |
| Trailing | Moves up when a day *closes* at a new high, and never moves down. |
| Trailing (intraday high) | Follows your highest balance *during* trades, for firms like Apex. Log the MAE and MFE (most against and most in your favor, in points) for an accurate limit. |

You can also enter these rules:

- **Stop trailing:** if your firm stops trailing once the limit reaches the start plus a set amount (often $100), tick that box.
- **Known high:** if the account had a higher balance before you started this journal, enter it here.
- **Daily loss limit:** the Dashboard shows the room left today. You get a warning if a trade you log goes past it.
- **Max contracts:** 10 micros count as 1. Trades over the limit are flagged.

**Prop firm stage.** Set the stage to **Evaluation** or **Funded** and add the rules your firm uses.

- **Evaluation:**
  - profit target
  - minimum trading days
  - consistency rule (the most your best day may be, as a percent of total profit)

  The **Prop firm** box on the Dashboard tracks each rule and shows your odds of passing.
- **Funded:**
  - your profit split
  - the safety net (the balance that must stay after a payout)
  - winning days needed, and how much counts as a winning day
  - minimum and maximum payout

  The Prop firm box shows what you can ask for and says **Ready for a payout** once every rule is met. Record each payout there.

**Passed or failed an evaluation?** Press **Archive** on the account, pick how it ended (passed, failed or closed) and its last trading day. It keeps all its trades and history, but leaves the Dashboard, reminders and Add trade, and moves to **Archived accounts** at the bottom of the Accounts page. **Restore** brings it back. A finished evaluation or a breached account also gets an **Archive** button on its Prop firm card. After a pass, add the funded account as a new account that starts the day after.

**Copy trading several accounts?** Put the accounts you trade together in a **group**.

- **With a leader:** the first account in the group is the leader. You log each trade once, on the leader, and every follower copies it at its own size.
- **Without a leader:** tick **No leader** when the accounts don't copy each other. Each trade then counts only for the account you pick.

## 4. Log your trades

There are three ways to get trades in.

**Quick log.** Press **+ Add trade**, pick the contract, the side and the size, and type the entry and exit. It's done in seconds, so you can log between trades.

**The full form.** Press **Full form** for everything else:

- setup, stop and target
- the rules you followed or broke
- mistakes and market conditions
- mood, notes and chart screenshots (paste or drop a picture)

The extra detail is what makes the reports useful, so fill in what you can.

**Import from your platform.** Export your fills or trades from **TradingView, NinjaTrader, Tradovate or Rithmic**. Then press the import button on Add trade, or drop the file anywhere on the window. Trades you already have are skipped, so importing the same file twice is safe. From NinjaTrader you can import the Orders grid, the Trades tab, or both: the second one fills in the trades the first one made (stop and target from the Orders grid; MAE, MFE and commission from the Trades tab) instead of adding copies.

In the Windows app, two extras help:

- **Import folder:** point TradeVault at the folder your platform exports to (**Setup & data → TradeVault app**), and new files there are imported by themselves.
- **Quick log shortcut:** a keyboard shortcut opens Quick log from anywhere. Set it in the same place.

## 5. A daily routine that works

1. **Before the open: Premarket.** Write your bias, key levels and the news to watch, and tick your checklist. You can plan the whole day or each session (Asia, London, New York).
2. **During the session: log.** Use Quick log right after each trade, or import at the end of the day.
3. **After the session: daily review.** Answer your review questions while the day is fresh. Fill in the details on any trades you quick-logged.
4. **End of the week: weekly review.** Look at the **report card** for the week's grade and at what the stats say. Then pick one thing to work on.
5. **Once a month:** read the **monthly report**, and check your **Playbook** to see which setups really pay.

Reminders on the Dashboard nudge you about a missing plan or review, drawdown or daily-limit trouble, and goals coming due. In the Windows app, they also come as Windows notifications.

## 6. Every page, in one line each

| Page | What it's for |
|---|---|
| **Dashboard** | Your results at a glance: P&L, win rate, equity curve, daily P&L, accounts, prop firm progress and breakdowns by setup, time and more |
| **Calendar** | Each day's P&L. Click a day to see its trades, plan and review together |
| **Premarket** | Your plan before the session |
| **Trades** | Every trade in a list you can search, filter and sort. Click one to see it in full |
| **Reviews** | Daily and weekly reviews, the report card, and monthly and yearly reports |
| **Rules** | Your trading rules, and how often you keep them |
| **Playbook** | A page for each setup, with its own stats |
| **Gallery** | Every chart and picture you've added, in one searchable place |
| **Life journal** | Sleep, mood, energy and habits, and how they line up with your trading |
| **Goals** | Goals with milestones, due dates and progress |
| **Settings** (gear) | Setup & data, the Dashboard layout, Customize, and the update history |

The **balance card** at the top shows your balance and the drawdown room left on your tightest account. Click it to switch views. The **+** next to it adds your own text box or multiple-choice question to the page you're on.

## 7. Make it yours

Open **Settings → Customize**:

- **Look:** a background (Blueprint, Chart paper, Dot grid, Topographic, Carbon fiber, a solid color or your own picture), separate button and box colors, and fonts
- **Tabs:** hide pages you don't use, rename them, change their order, and choose which page the journal opens on
- **Keyboard shortcuts:** change them or add your own
- **Groupings:** the hold-time, R and time-of-day groups in the stats, your market sessions, and when a trading day starts (6 PM by default, when the futures session opens)

**Settings → Dashboard** picks which boxes the Dashboard shows, and in what order.

## 8. Keep your journal safe

Your journal lives only on your own devices. Nothing is uploaded anywhere, which also means nobody else has a copy. Back it up.

- **Windows app:** your journal saves to a file on your PC as you go. TradeVault also makes a backup when it opens, every 15 minutes while you work, and before anything risky. Pick a backup folder of your own in **Setup & data → TradeVault app**, ideally on another drive. **Ctrl+B** backs up right away.
- **Browser or iPhone:** the journal is stored in the browser. Clearing the browser's data (or deleting the home-screen app on iPhone) erases it. Save a backup file from **Setup & data → Backup & data** regularly. A reminder tells you when it's been a while.

**Never upload a backup file to GitHub.** This repository is public.

## 9. Questions people ask

**Windows won't install it.** Click **More info**, then **Run anyway** on the "Windows protected your PC" screen. If the download itself is blocked, open the browser's downloads list and choose **Keep**.

**Why did a trade after 6 PM land on the next day?** Futures trading days start in the evening, so an evening trade belongs to the next day's session. You can change or turn this off in **Customize → Groupings in the stats**.

**My fees look wrong.** TradeVault only uses the per-contract rates you entered in **Setup & data → Trading**. Check the rate for that market. Each trade keeps the rate from the day it was logged, so changing your rates later doesn't rewrite past trades.

**An import skipped some trades.** The message after the import says why. Usually the trades were already in your journal, came from a follower account (followers copy their leader), or came from an account name the journal doesn't have. Rename the account to match your platform and import again.

**How do I get my phone trades onto my PC?** On the phone, save a backup. On the PC, use **Merge into my journal** in **Backup & data**. See [Phone and PC](Phone-and-PC.md).

**I want the tour again.** Go to **Settings → Take the tour**.
