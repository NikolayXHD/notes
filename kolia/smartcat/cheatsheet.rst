Gitlab merge request

Показать все скрытые НЕизменынные области
-----------------------------------------
document.querySelectorAll(".js-unfold-all").forEach(element => element.click())

Скрыть комментарии
------------------
document.querySelectorAll(".diff-notes-collapse").forEach(element => element.click())

Собрать ПР на teamcity
----------------------

Запушить правки ветку teamcity-xxx

Передать тикет в тестирование
-----------------------------

Если есть миграции, добавить тег Migrations, описать в комментарии, что они делают

восстановить бэкап paymenttools
-------------------------------

mongorestore --db=paymenttools_hidalgo_backup mongodb://mongodb-dev.sc.local \\tartarus.sc.local\Backup\paymenttoolselease-1.59

refresh Environment variables without restarting app
----------------------------------------------------

have chocolatey installed
run RefreshEnv

GitExtensions revision links
----------------------------

[A-Z]+\-\d+
{0}
{0}	https://portal.smartcat.ai/youtrack/issue/{0}

JetBrains issue navigation
--------------------------

[A-Z]+\-\d+
https://portal.smartcat.ai/youtrack/issue/$0

Добавить пользователя в админку paymenttools
--------------------------------------------

Залогинился на stage-next в админку PaymentTools с админской учёткой admin/admin, завёл себе пользователя.
Как его теперь активировать? Вроде должно быть письмо для активации аккаунта, но не приходит.
https://yadi.sk/d/Czzz8XqG27CgNA

Yandex.DiskYandex.Disk
2020-08-04_16-23-47.jpg
View and download from Yandex.Disk

Vladimir Belyakov: Его нужно заблокировать, а потом разблокировать, и вроде ссылка должна появиться.

Тестовые карты
--------------

https://developers.ecommpay.com/en/en_PP_TestCards.html

Подключение к офисной mongodb
-----------------------------

http://wiki.sc.local/MongoDB/OfficeCluster

Копирование базы между серверами mongodb
----------------------------------------

mongodump \
--uri="mongodb://n.idalgo_reader:RCZ7tQ2vRoN15kGIdPxf@mdb-foxtrot.sc-eu.local:27017/smartcat?authSource=admin" \
--collection=Core.Accounts \
--out=/run/media/kolia/ssd/mongodump/office

mongorestore --drop \
--uri mongodb://localhost:27017 \
--db smartcat \
--collection Core.Accounts \
/run/media/kolia/ssd/mongodump/office/smartcat

mongodump \
--uri="mongodb://reader:mAvVn89pXV92UR3i@mdb-kazan.ya.sc.local:27017/t-suggest-stage?authSource=admin" \
--out=/run/media/kolia/ssd/mongodump/office

mongodump \
--uri="mongodb://reader:mAvVn89pXV92UR3i@mdb-kazan.ya.sc.local:27017/t-suggest-stage?authSource=admin" \
--out=/run/media/kolia/backup-1/mongodump/office

mongorestore --drop \
--uri mongodb://mongodb-dev.sc.local \
--db t-suggest-stage \
--nsFrom "t-suggest-stage.*" \
--nsTo "t-suggest-hidalgo.*" \
/run/media/kolia/backup-1/mongodump/office/t-suggest-stage

office -> local smartcat_stage_next
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

mongodump \
--uri="mongodb://reader:mAvVn89pXV92UR3i@mdb-kazan.ya.sc.local:27017/smartcat_stage_next?authSource=admin" \
--out=/run/media/kolia/ssd/mongodump/office

mongorestore --drop \
--uri mongodb://localhost \
--nsFrom "smartcat_stage_next.*" \
--nsTo "smartcat_hidalgo.*" \
/run/media/kolia/ssd/mongodump/office/smartcat_stage_next

Пример агрегации mongodb
------------------------

db.instruments.aggregate([{$group: {_id: {type:"$type", currency: "$payoutCurrency"}, count: {$sum: 1}}}])
count = имя поля в выводе

slaveOk
-------

rs.slaveOk()

Логи paymenttools stage-next в kibana
-------------------------------------

выбрал индекс для логов из kubernetes
https://yadi.sk/d/3CpJ4k8aZNZGcQ

db.instruments.find({state: {$in: [1, 2]}, created: {$lte: ()}})

PaymentTools отвечает TrustFailure локально запущенному smartcat
----------------------------------------------------------------

PaymentTools со stage-next ругается на мой локальный smartcat TrustFaiure
https://smartcat1.slack.com/archives/GC4J30KV4/p1591708958150900?thread_ts=1591700494.148600&cid=GC4J30KV4
Это вроде известная проблема, у Саши Юрьева такое было 2 месяца назад, но он пока не сказал как это лечить (edited)
17:32
https://smartcat1.slack.com/archives/GC4J30KV4/p1591708958150900?thread_ts=1591700494.148600&cid=GC4J30KV4

Alexey Strelkov  17:33
http://wiki.sc.local/HTTPS_Certificates
17:34
страница старая, но вдруг поможет :slightly_smiling_face:

Запуск smartcat в консоли
-------------------------

task processing
~~~~~~~~~~~~~~~

PS C:\git\smartcat> C:/git/smartcat/TaskProcessing/bin/AbbyyLS.SmartCat.TaskProcessing.exe console

Web
~~~
"C:/Program Files/IIS Express/iisexpress.exe" /config:C:/git/smartcat/.idea/config/applicationhost.config /site:AbbyyLS.LingvoPro.Web /apppool:Clr4IntegratedAppPool


Web.Admin
~~~~~~~~~

Сделать в свойства проекта -> вкладка web
  URL: localhost:5001
  Development port: 5001
Сохранить, убедиться, что 5001 прописан в applicationhost.config

"C:/Program Files/IIS Express/iisexpress.exe" /config:C:/git/smartcat/.idea/config/applicationhost.config /site:AbbyyLS.LingvoPro.Web.Admin /apppool:Clr4IntegratedAppPool


Запуск selenum тестов smarcat
-----------------------------

Запустить AbbyyLS.LingvoPro.Web
  запускается по-умолчанию на http://localhost:5000
Запустить AbbyyLS.LingvoPro.Web.Admin
  настроить запуск по другому порту
    - Правый клик на проекте, Properties, вкладка Web
      - указать URL localhost (обязательно заполнить)
      - указать development port какой нужно, например 5001
    - Необязательно. В свойствах конфигурации запуска указать запуск браузера с URL http://localhost:5001

Настроить конфигурацию в солюшене селениумных тестов
  configs/AgentSpecific.xml
    - указать URL Smartcat, например http://localhost:5000
    - указать URL админки Smartcat, например http://localhost:5001
    - указать аккаунт Smartcat в PaymentTools
      можно использовать аккаунт, с которым локальный солюшен Smartcat ходит в PaymentTools
      login = тот что вы указали в девелоперском конфиге smarcat, любая строка
      secret = тот ключ, который указан в девелоперском конфиге smarcat, DEV_...

Показать заголовок RDP если он скрыт настройками
------------------------------------------------

Ctrl+Alt+Home

Запустить тесты netcore в консоли
---------------------------------

dotnet test WebApi.Client.Tests --filter=FullyQualifiedName~InstrumentTypeTests

экранировать параметр, передаваемый через powershell
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

dotnet test .\PaymentTools.sln "--filter=TestCategory!=Integration&TestCategory!=Explicit"


Банковские реквизиты ИП
-----------------------

ИНН 123456789047
Номер_счёта 40802810400000000225
Назв_банка ПАО Сбербанк
БИК 044525225
корр_счёт 30101810400000000225


многоэкранный rdp
-----------------

xfreerdp /multimon /u:n.idalgo /v:10.18.1.64

Проблема с сертификатом
-----------------------

Симптомы
~~~~~~~~

- При локальном запуске PT из под linux, подключение к scol на stage-ах валится с ошибкой
  ``The remote certificate is invalid according to the validation procedure``

- ``curl https://stage-internalapi.scol.sc.local/server/info`` валится с ошибкой
  ``curl: (60) SSL certificate problem: unable to get local issuer certificate``

- в браузере переход на стейджи, напр ``https://stage-internalapi.scol.sc.local/server/info``
  ругается что сертификат не доверенный

В тредах про эту проблему в .netcore пишут, что curl более требовательный к сертификатам, чем
windows, если curl не может, то не сможет и httpClient .netcore

Лечение
~~~~~~~

- Скачать сертификат smartcat для стендов, ниже цепочка, как нашлось
  http://wiki.sc.local/File:Sc-TOOLS-CA.zip
  http://wiki.sc.local/HTTPS_Certificates
  https://www.notion.so/smartcat1/fb6414ba314e478d8eb0464906c4ebe2#5e29bcb1d39d4163bf805ff5b1d18cc5
  https://smartcat1.slack.com/archives/CC25GK6RH/p1626535513005900?thread_ts=1626513126.496700&cid=CC25GK6RH

- Установить как доверенный в ОС. Всё ещё не решает ни проблему с браузером, ни проблему с curl.
  https://askubuntu.com/a/649463/947862

  - Copy the .crt file into /usr/local/share/ca-certificates/
  - Make sure the permissions are OK (755 for the folder, 644 for the file)
  - Run "sudo update-ca-certificates"

- Починить проблему с curl
  конвертировать .cer -> .crt
    openssl x509 -inform DER -in sc-TOOLS-CA.cer -out sc-TOOLS-CA.crt
  ubuntu
    https://stackoverflow.com/a/24618403/6656775
    Вписать в конец /etc/ssl/certs/ca-certificates.crt содержимое sc-TOOLS-CA.crt
  arch
    sudo trust anchor sc-TOOLS-CA.crt

- починить проблему с chrome
  https://serverfault.com/a/980597/571611
  In Ubuntu, Chrome uses its own certificate store. You can import your RootCA.crt in Chrome's
  settings -> privacy and security -> manage security keys -> manage certificates -> authorities
  Note that updating ubuntu system certificate store by update-ca-certificates has no effect on Chrome.

- промежуточное решение, пригодится если будут другие поблемы с сертификатом
  https://stackoverflow.com/a/44540071/6656775 ::

   using (var httpClientHandler = new HttpClientHandler())
   {
     httpClientHandler.ServerCertificateCustomValidationCallback =
       (message, cert, chain, errors) => true;
     using (var client = new HttpClient(httpClientHandler))
     {
       // Make your request...
     }
   }

Создать readonly пользователя mongodb на stage-full (mdb-london)
----------------------------------------------------------------

Есть пользователь с полными правами, нужен readonly пользователь, чтобы не
натворить делов ненароком

use admin

db.createUser({user: 'n.idalgo_reader', pwd: passwordPrompt(), roles: [{role: 'readAnyDatabase', db: 'admin'}]})

воспользовался паролем ikIu5ElG
