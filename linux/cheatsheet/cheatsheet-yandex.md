Deploy PR to testing
--------------------

- Добавить метку deploy:testing в PR
- В Teamcity backend-py3 / Releases / Custom (Testing)
    - Под заголовком отфильтровать по ветке
        имя ветки = имя сервиса (но не ветки PR)
    - Возможно, билд с правками уже есть, если нет
    - Run ...
      - Убедиться на вкладке changes выбрана ветка = имя сервиса
      - Run Build
    - После завершения билда, появляется ссылка на релизный тикет
        Success https://c.yandex-team.ru/tickets/1917484
- Дождаться завершения релизного тикета. В заголовке релизного тикета:
    Тикет 1917484 testing done

- Перейти в админку тестинга, напр. редактор конфигов
    https://tariff-editor.taxi.tst.yandex-team.ru/dev/configs

deploy to prod
--------------

Инструкция по выкатке в prod
    https://wiki.yandex-team.ru/taxi/backend/deploy/?from=%252Ftaxi%252Fbackend%252Fbasichowto%252Fdeploy%252F

Сначала катим в prestable
    https://wiki.yandex-team.ru/taxi/backend/deploy/?from=%252Ftaxi%252Fbackend%252Fbasichowto%252Fdeploy%252F#vykatitsjavprestableprinalichii

    просим ОК в чате TAXIDATA

    пример кондукторного тикета на prestable
        https://c.yandex-team.ru/tickets/1918449
        в данном примере катится обновление
          - крон задач
            КУДА: taxi / taxi_replication_tasks  / taxi_replication_tasks
          - ручек сервиса реплиации
            КУДА: taxi / taxi_replication / taxi_replication
        
        нажимаем ссылку taxi_replication_tasks
        https://c.yandex-team.ru/workflows/taxi.taxi_replication_tasks
        видим список окружений
        Unstable / Testing / Prestable / Stable
        со ссылками на группы хостов
        
        кликнем на prestable:
            https://c.yandex-team.ru/groups/taxi_prestable_replication_tasks
        
            видим 1 хост replication-tasks-sas-01.taxi.yandex.net
        
        аналогично для  КУДА: taxi / taxi_replication / taxi_replication
            видим 1 хост replication-sas-01.taxi.yandex.net
        
    
    смотрим упавшие крон таски
        https://tariff-editor.taxi.yandex-team.ru/dev/cron        
    
    как смотреть крон-таски prestable
        нужно сначала выбрать отдельную таску
        в отдельной крон таске логи уже можно фильтровать по хостам
    
    смотрим логи Кибаны
        https://kibana.taxi.yandex-team.ru/app/kibana
            для тестинга ссылки
            https://kibana.taxi.tst.yandex-team.ru
            https://kibana-unstable.taxi.tst.yandex-team.ru

    Графана
        https://grafana.yandex-team.ru/
    
        Репликация
            https://grafana.yandex-team.ru/d/Mx9P5OzZk/taxi_conductor_taxi_replication?orgId=1&refresh=30s&from=now-12h&to=now&var-dorblu_metrics_group=dorblu_taxi_replication
        
            Можно фильтром в левом верхнем углу перейти к аналогичным по prestable

Запустить крон репликации в тестинге вручную
--------------------------------------------

ssh replication-tasks-vla-01.taxi.tst.yandex.net

- rsync-нуть backend-py3 на хост репликации
  - предварительно сделать make gen ибо на хосте нет make
  - ~/scripts/rsync_py3_.sh replication-tasks-vla-01.taxi.tst.yandex.net
    - хост можно посмотреть в executEr, не забыть % перед именем группы
    - имя группы хостов можно посмотреть в кондукторном тикете
      если на то пошло, там же можно посмотреть и сами хосты, без executer

- запустить крон командой
    PYTHONPATH=.:services/replication/:submodules/replication-core /usr/lib/yandex/taxi-py3-2/bin/python3.7 -m replication.replication.cron_run --rules
    libraries/client-solomon
    --debug
    -d без лока

фильтр в Kibana
---------------

обработанные документы по определённой очереди

(path:"/var/log/yandex/taxi-replication/taxi.log" OR path:"/var/log/yandex/taxi-replication-cron/taxi.log") AND text:"Total processed for postgres-taximeter_orders_shard10"

Классификация ошибок

NOT level: DEBUG AND NOT level: INFO 

(path:"/var/log/yandex/taxi-replication/taxi.log" OR path:"/var/log/yandex/taxi-replication-cron/taxi.log") AND NOT text: "failed to create client socket" AND NOT text: "Cannot connect to crons" AND NOT text: "prolongation network error" AND NOT text: "during obtaining info for host" AND NOT text: "connection reset by peer" AND NOT text: "before next retry" AND NOT text: "new retry"

Grafana

https://grafana.yandex-team.ru/d/Mx9P5OzZk/taxi_conductor_taxi_replication?orgId=1&refresh=30s


start testsuite environment
===========================
python3.7 -m testsuite.environment.main --services mysql --build-dir .build start

connect to tetstuite pgsql
==========================
mysql --host=127.0.0.1 --port=13307 -u root

SHOW DATABASES;
  #: mysql, ...
\u mysql
