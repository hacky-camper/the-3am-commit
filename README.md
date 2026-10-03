# pillowfort

a tiny cozy app that keeps track of where everything in the fort is: cushions, blankets, snacks, and the HackCamp flag. hackcamp 2026 project.

> **came here from a flag?** you're on the trail. the fort collapsed, the HackCamp flag is lost somewhere in it, and sleepy-dev's notes lead to it.
>
> - work in a terminal, inside this folder. on Windows, use **Git Bash** (it came with git), not PowerShell or CMD.
> - start with the note sleepy-dev left themselves. it's hidden: `ls -a` shows it.
> - markers look like `hc26{...}`. finding one means you're on the right track. you don't submit them, you just follow what they say. only one thing gets submitted, at the very end, and it'll be obvious.
> - stuck? the page you came from has a "stuck? skip ahead" section with exact steps.
> - broke something? delete this folder and clone again. you lose nothing.

## commands you'll probably want

| command | what it does |
|---|---|
| `ls -a` | list everything in this folder, including hidden files (names starting with `.`) |
| `cat <file>` | print a file |
| `grep <word> <file>` | show only the lines of a file that contain a word |
| `git log --oneline` | list every commit, one per line |
| `git log --grep=<word>` | only commits whose message contains a word |
| `git log --oneline -- <file>` | only commits that touched one file |
| `git log -p -- <file>` | same, plus exactly what changed (`-` removed, `+` added) |
| `git checkout <id>` | go back to how the project looked at that commit |
| `git switch main` | come back to the present |

**`git log` opens a scrolling view.** arrow keys or space to scroll, `q` to get out. if your terminal seems frozen after a git command, press `q`.

**"detached HEAD"** is not an error. it just means you're looking at the past. `git switch main` brings you back.

## setup

```
npm install
npm start
```

the app talks to the api on whatever port is in `config.json`. (it's the wrong one, which is why nobody can find the flag.)

## contributing

you can't push to this repo directly. to propose a fix:

1. on GitHub, click **Fork** (top right of this repo). that makes your own copy.
2. get your fork onto your computer. easiest: inside the folder you already have, run `gh repo fork --remote`. that points `git push` at your fork. (or clone your fork fresh.)
3. make the fix, then:
   ```
   git add config.json
   git commit -m "fix the port"
   git push
   ```
4. go to your fork on GitHub. there'll be a banner offering to **Contribute / Open pull request**. click it, fill in the description, and create the pull request.

a bot checks every PR and replies within a minute or two.

## status

- [x] fort map
- [x] cozy theme
- [ ] literally anything working
