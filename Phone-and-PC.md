# Phone and PC: backups, merging and updates

TradeVault keeps a separate copy of your journal on each device: one in the Windows app, one on your iPhone. They don't sync on their own. You move entries between them with a **backup file**, and **Merge into my journal** brings in what's new without replacing anything.

> **The golden rule:** treat the PC as your main journal. It saves to a file and backs itself up automatically. Merge your phone's entries into it often.

---

## Two ways to bring in a backup

When you open a backup file (**Setup & data → Backup & data → Restore from backup file**, or drop the file onto the TradeVault window on a PC), TradeVault first shows what's in it: when it was made, how many trades and from which dates, reviews, life journal days and pictures, next to what you have now. Then you choose:

| | **Merge into my journal** | **Replace everything** |
|---|---|---|
| What it does | Adds what's new in the backup. You tick which items come in | Swaps your whole journal for the backup |
| Your existing entries | Kept exactly as they are | Replaced |
| Use it for | Bringing phone entries to the PC, or PC entries to the phone | Setting up a new device, or recovering from a problem |

Merge never deletes anything. If both copies have the same trade or review, your journal's version stays, and the backup only fills in details that are missing. Example data is left out, pictures come along with their items, and new setups and mistakes join your lists. You can **Undo** right after merging, and the Windows app saves a backup before every merge.

---

## Phone to PC (every day you log on the phone)

1. On the iPhone, open TradeVault from your home screen and go to **Setup & data → Backup & data → Download backup file**.
2. The share sheet opens. Choose **Mail** and send it to yourself (or **Save to Files**, Google Drive and so on).
3. On the PC, save the attachment, then **drop it onto the TradeVault window** (or use **Restore from backup file**).
4. Choose **Merge into my journal**, untick anything you don't want, then click **Merge the ticked items**.

Your phone's new trades, reviews and notes are now in your main journal on the PC.

## PC to phone

### First time: set up the phone
1. On the PC: **Setup & data → Backup & data → Download backup file** (or **Back up now**, then find the file in your backup folder). Email it to yourself.
2. On the iPhone, open the email, tap the attachment and choose **Save to Files**.
3. In TradeVault on the phone: **Setup & data → Backup & data → Restore from backup file**, pick the file, then **Replace everything**.

The phone now has all your accounts, setups and lists, plus your full history.

### Later: catch the phone up
Do the same, but choose **Merge into my journal** in step 3. The phone gets anything new from the PC, and its own entries stay.

> To keep both devices matching, merge both ways: phone to PC, then PC to phone.

---

## Updates

### Windows app
TradeVault checks for a new version a little after it opens, and every few hours while it runs. When one is ready you'll see **"TradeVault x.x is ready"** with **Update now** and **Later**.

- **Update now** saves and backs up your journal, installs the update, and reopens TradeVault. Your journal, backups and pictures stay where they are.
- To check yourself: **Setup & data → TradeVault app → Check for updates**.
- Updates come only from this page's [Releases](https://github.com/motherofstacy/TradeVault/releases), and every one is signed. TradeVault won't install anything that isn't.

### iPhone
The iPhone version updates when a new version of the page is published here. To pick it up, close TradeVault completely (swipe it away in the app switcher) and open it again. Your logged entries stay; only the app itself changes.

---

## Keeping your data safe

- **Merge to the PC often.** Safari can clear a website's stored data if it thinks you don't need it, and the PC is where your automatic backups live.
- **Back up before big changes** (Ctrl+B, or **Back up now**, in the Windows app).
- **Keep backup files private.** They contain your whole journal, including pictures. Never upload one to GitHub; this repository is public.
- If something goes wrong on the PC, **Setup & data → Backup & data** lists your automatic backups, each with a **Restore** button and a preview before anything changes.
