deploy / test services
----------------------

yandex-passport-tvmknife
tvmknife get_service_ticket sshkey --src 2013636 --dst 2013236


/home/ndias/git/uservices/services/user-api/docs/yaml/client.yaml
    testing: user-api.taxi.tst.yandex.net

админка
    https://tariff-editor.taxi.tst.yandex-team.ru/

    редактор конфигов
        test
        tvm_ser
            список роль -> id
            "developers": 2013636,
            "user-api": 2013236,

src developers
dst user-api

настроить резолв IPv6 в http тестировщике IDE
    https://wiki.yandex-team.ru/users/desire/remotepycharm/#nastrojjkavirtualki

    help -> edit custom vm options
    # Djava.net.preferIPv4Stack=true

логи в админке

https://tariff-editor.taxi.yandex-team.ru/logs?phone_type=yandex&type=%2Fuser_phones%2Fbulk&cgroups=taxi_prestable_user_api&status_code=500

логи в кибане

https://kibana.taxi.yandex-team.ru/app/kibana#/discover?_g=h@962158e&_a=h@ab500ed    

grafana

https://grafana.yandex-team.ru/d/klla5OzWz/taxi_conductor_taxi_user_api?orgId=1&refresh=30s&from=now-6h&to=now
