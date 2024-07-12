# git

Завёл ssh ключ id_ed25519, т.к. со старым rsa-key-20151116 получал отказ при
попытке клонировать по ssh.
История до конца не понятная, т.к. Ксюша утверждает, что у неё тоже ssh-rsa,
и работает норм. Единственное возможное объяснение -- длина ключа.

# vpn

- Импортируем .ovpn через network-manager
- В rout-ах ставим only for resources in this connection
  чтобы интернет трафик, кроме явно запрошенных VPN-сервером адресов, шёл
  как обычно. Иначе под VPN ломается доступ в интернет, даже corp.domclick.ru
  качает кое-что из внешнего мира, без галки он не откроется.
- поначалу после импорта .ovpn network manager запрашивал пароль к ключу
  перед подключением, где-то в продвинутых GUI настройках авторизации удалось
  это побороть.

# vpn v2

Перестало работать подключение с домашнего компьютера. Настроил socks5 proxy
через mac


0. Подключить VPN на маке
1. Открыть socks5 туннель на 127.0.0.1:9090
```bash
ssh -N -D 9090 nmidalgodias@mac
```

2. Как проверить что работает

```bash
curl -x socks5h://127.0.0.1:9090 ifconfig.me
```

Должно срабатывать при включенном туннеле и валиться в ошибку при отключенном.

3. Настроить socks5 proxy в firefox, vivaldi отказывается наотрез.

4. Чтобы прозрачно работал git, lazygit и прочее.

- Ставим openbsd-netcat вместо дефолтного gnu-netcat
- Прописываем в конфиге git
```
[core]
        sshCommand = ssh -i /home/kolia/.ssh/id_ed25519 -o 'ProxyCommand nc -X 5 -x 127.0.0.1:9090 %h %p'
```
Для отладки добавляем флаг `-v`, вот так `ssh -v -i ...`

# lightgbm

Не ставится lightgbm, т.к. не находит libomp либо omp.h
```
brew install libomp
```

# Контейнер для jupyterlab в cubeflow
dev-confer-docker-push.sberned.ru/nuds/kubeflow-torch:0.0.7

# proxy

Подключаемся к VPN домклик через обратный SSH proxy

1. Запускаем со стороны mac обратный SSH proxy до машины kde. Это нужно, т.к.
   прямое SSH подключение kde -> mac больше не работает, спасибо админам.

   ```
   mac> ssh -NT -R 20022:localhost:22 kde
   ```
2. На стороне рабочей машины kde создаём SOCKS5 туннель до mac через ранее
   поднятый обратный SSH proxy

   ```
   kde> ssh -N -D 9090 -p 20022 nmidalgodias@localhost
   ```
3. Запускаем браузер с флагом proxy
   ```
   kde> vivaldi --proxy-server="socks5://127.0.0.1:9090" --user-data-dir=/home/kolia/.local/share/ice/profiles/domclick
   ```
   Флаг ``--user-data-dir`` нужен только для того, чтобы не позволить vivaldi
   переиспользовать ранее запущенный инстанс, т.к. в этом случае флаг proxy
   не срабтает.

4. Прописываем прокси в конфиге репы с jupyter для запросов из Python
   ```
   # .env
   HTTPS_PROXY="socks5h://127.0.0.1:9090"
   ```
