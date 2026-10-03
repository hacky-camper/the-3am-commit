# demo script

1. open the app
2. show the fort map
3. point at the flag on top
4. dont click the other thing

---

nothing works right now. the api wont connect, and the fort map lives
in the api, so i cant even look up where the flag ended up.

someone changed the port in config.json tonight. i dont know what it
used to be and i dont know who did it. git knows both.

first come back to the present:

    git switch main

then:

    git log -p -- config.json

that shows every commit that touched config.json, who made it, and
exactly what changed. lines starting with - were removed, lines
starting with + were added. find the commit that changed "port".
write down the old number and who made the commit. their commit
message says what to do next.

(press q to get out of git log)

hc26{git_never_forgets}
