python cache
============
```
find . -name "__pycache__" -exec rm -r {} +
find . -name "*.pyc" -delete
```

git
===
хеши текущих коммитов веток
---------------------------
```
git show-ref
```

diff коммита
------------
```
git show # текущий коммит
git show commit_hash
```

postgresql
==========
console
-------
```
sudo -u postgres psql postgres
```

manage service
--------------
```
/etc/init.d/postgresql restart
```

посмотреть кто открыл порт
--------------------------
```
sudo netstat --all --program | grep '5433' # 5433 это порт
```

gitextensions
=============
reset window positions
----------------------
```
rm  -rf ~/.local/share/GitExtensions/*
```

if_gt.sh
========
```
#!/bin/bash
if [[ "$2" > "$1" ]]; then echo $2; fi;
```
grep with file pattern
======================
```
grep -r searched_text --include "*.cmake"
```

не двойные кавычки
==================
```
(?<!:`[\w\.]+)(?<!:)(?<!`)`(?!`)
```

вывести файл с цветами ANSI
===========================
заменить в файле

```
\[[\da-d;]+m
\\e\0
```
echo -e "$(cat filename)"

screen
======

```
ssh dell
screen -qxRA name
# q quiet, x attach again, R reuse or create by name, A adapt to current screen
# work
# close ssh session
ssh dell
screen -qxRA name
# continue working
```

style set font feature
======================
```
cd /home/kolia/.local/share/fonts/NerdFonts
ls Fira*Mono.ttf | xargs -n1 -I{} echo pyftfeatfreeze -f ss03,ss05 \"{}\" \"{}\"
pyftfeatfreeze -f ss03,ss05 "Fira Code Bold Nerd Font Complete Mono.ttf" "Fira Code Bold Nerd Font Complete Mono.ttf"
pyftfeatfreeze -f ss03,ss05 "Fira Code Light Nerd Font Complete Mono.ttf" "Fira Code Light Nerd Font Complete Mono.ttf"
# ...
# execute lines above
```

check file system
=================
```
lsblk # show devices

# -cc non destructive read-write check for bad blocks
# -k keep previously bad blocks
# -f force check
# -v verbose
sudo e2fsck -cckfv /dev/sdb1
```

setup wacom tablet to use 1 screen
==================================
```
# list input devices, find id of "Wacom Intuos S Pen Pen"
# id=20
xinput

# list displays
# was DVI-D-0
xrandr

xinput map-to-output 20 DVI-D-0
# done, tablet moves cursor strictly within one screen
```

ограничить память докеру без флага docker run --memory
======================================================
/usr/lib/systemd/system/docker.service
```
LimitAS=10G
```
```
sudo systemctl daemon-reload && sudo systemctl restart docker
```

Downgrade all packages to a previous date
-----------------------------------------
```
sudo cp /etc/pacman.d/mirrorlist{,.bak}
sudo vim /etc/pacman.d/mirrorlist
```
and change the content to the following.

```
### Arch Linux repository mirrorlist
### Created to downgrade to Nov 10th 2020
Server=https://archive.archlinux.org/repos/2020/10/11/$repo/os/$arch
```

```
 sudo pacman -Syyuu
```

Выбрать окно KDE с поиском с клавиатуры
=======================================
https://askubuntu.com/questions/1130084/on-kde-how-to-set-up-keyboard-shortcut-to-show-all-open-windows

- `Ctrl + F10`: Toggle present window
- ввести часть заголовка или имени приложения

Midnight commander (mc)
=======================
`Alt + I` направить соседнюю панель в ту же директорию
`Alt + Tab` автодополнение в командной строке

C# interactive console, aka REPL
================================
Вариант 1, очень неудобный, плохая интерактивность
--------------------------------------------------
Источник https://codez.deedx.cz/posts/interactive-csharp-on-linux/
```
dotnet install -g dotnet-script
dotnet script
```
Вариант 2, команда `csharp` из пакета mono
------------------------------------------
```
sudo pacman -S mono
csharp
```

yandex-browser-beta
===================
- Do you want it to make ... default browser?
- No, don't ask again

bash edit command in editor
===========================
Ctrl+x Ctrl+e

convert xlsx to csv from bash
=============================
```
libreoffice --convert-to csv:"Text - txt - csv (StarCalc)":9,34,76  *.xlsx
```

NLog + NetCore + NUnit
======================
Логгер должен писать в консоль
NLog.config в проекте теста, не забываем флаг CopyToOutputDirectory=...
```
<?xml version="1.0" encoding="utf-8" ?>
<nlog
  xmlns="http://www.nlog-project.org/schemas/NLog.xsd"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  autoReload="false">

  <targets async="true">
    <target name="Console" xsi:type="Console" layout="${level:format=FirstCharacter} ${time} ${logger:shortName=True} ${message:withexception=true}"/>
  </targets>
  <rules>
    <logger name="*" writeTo="Console" minlevel="Info" />
  </rules>
</nlog>
```

https://docs.nunit.org/articles/nunit/getting-started/dotnet-core-and-dotnet-standard.html#how-do-i-produce-a-test-results-file
Тесты надо запускать, запрашивая вывод в файл. В консоли логов не будет.
```
dotnet test --no-build --filter "FullyQualifiedName~Should_get_translator_suggests_for_EN_ES" -- NUnit.TestOutputXml=.
```
Директория задаётся относительно бинарников тестовых .dll

Путь к выводу теста
```
src/Tests/bin/Debug/netcoreapp6.0/Smartcat.TranslatorSuggestService.Tests.xml
```

Установка разных dotnet sdk side-by-side
----------------------------------------
https://wiki.archlinux.org/title/.NET
```
yay -S dotnet-runtime-5.0-bin aspnet-runtime-5.0-bin dotnet-sdk-5.0-bin
```

fix JetBrains Toolbox dereferencing symlinks
--------------------------------------------
Вместо
```
ln -s /run/media/kolia/fast/git /home/kolia/git
```
воспользоваться ``mount --bind``
```
# /etc/fstab
/run/media/kolia/fast/git /home/kolia/git none bind,user,exec 0 0
```

print multiple images
---------------------
https://bbs.archlinux.org/viewtopic.php?id=160991
```
convert *.jpeg multipage.pdf
```

fix OSError: [errno 24] Too many open files
===========================================

set ulimit temporarily
----------------------

show limit
```
ulimit -a
```
look at Maximum number of open file descriptors (-n)
default is 1024

```
ulimit -Sn 65536
```

set ulimit permanently
----------------------

https://unix.stackexchange.com/questions/366352/etc-security-limits-conf-not-applied

Edit /etc/systemd/user.conf for the soft limit, and add DefaultLimitNOFILE=<soft_limit_number>
Edit /etc/systemd/system.conf for the soft limit, and add DefaultLimitNOFILE=<hard_limit_number>

Save list of open tabs in Pycharm
---------------------------------
Сохранить список открытых вкладок в Pycharm
https://stackoverflow.com/questions/28800704/how-can-i-save-groups-of-open-tabs-in-intellij

- должен быть включен плагин Task Management
- выполнить действие (Ctrl + Shift + A) Save context / Load context
- контексты хранятся в `~/.config/JetBrains/PyCharm2022.3`
- Ныьтё про то, что этим невозможно нормально управлять
  https://intellij-support.jetbrains.com/hc/en-us/community/posts/360007607519-Where-are-bookmarks-stored-How-do-I-keep-them-if-I-copy-the-script-file-elsewhere-How-do-I-add-them-to-version-control-

Freeze package version in Arch linux (pacman)
---------------------------------------------
Заморозить версию пакета

/etc/pacman.conf
```
IgnorePkg = lazygit
```

android shell
-------------
Потребление процессорного времени процессами на устройстве android

На устройстве разрешить отладку по USB
Подключить устройство через USB к компьютеру
На компьютере
```
yay -S android-sdk-platform-tools
cd /opt/android-sdk/platform-tools
adb shell
top  # process CPU consumption
```

Bosto 16HD tablet setup arch linux
----------------------------------
sudo pacman -S xf86-input-wacom

```bash
lsusb
# ...
Bus 001 Device 010: ID 0ed1:7821 WinMaxGroup Tablet Device
#                      ^^^^^^^^^
```

/etc/X11/xorg.conf.d/50-digimend.conf:
```
Section "InputClass"
	Identifier "Bosto 16HD with Wacom Driver"
	MatchUSBID "0ed1:7821"
	MatchDevicePath "/dev/input/event*"
	Driver "wacom"
EndSection
```

Logout / Login

Удалить назначения кнопок в
`KDE Settings / Input Devices / Graphic Tablet / Stylus`

Выполнить `~/script/set_wacom_screen.sh` для привязки экрана и кнопок стилуса.

fix dotnet Globalization
------------------------
ошибка runtime
```
Process terminated. Couldn't find a valid ICU package installed on the system. Set the configuration flag System.Globalization.Invariant to true if you want to run with no globalization support.
```

- Вариант 1. Обмазаться везде переменной окружения
  `DOTNET_SYSTEM_GLOBALIZATION_INVARIANT=1`
  - Чтобы применилось к IDE, https://userbase.kde.org/Session_Environment_Variables
    прописать в `~/.config/plasma-workspace/env/dotnet.sh`
    ```
    export DOTNET_SYSTEM_GLOBALIZATION_INVARIANT=1
    ```
  - Чтобы применилось в shell, в `~/.config/fish/config.fish`
    ```
    set -x DOTNET_SYSTEM_GLOBALIZATION_INVARIANT
    ```

  Не прокатило в smartcat/work, ей очень хочется культуру en_US в дефолтном
  json-сериализаторе для NLog

- Вариант 2
  Пакет `icu` уже есть, но может не хватать `libicu`
  ```
  yay -S libicu53
  ```
