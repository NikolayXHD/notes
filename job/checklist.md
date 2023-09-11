номенклатура текущих моделей, преимущества и недостатки, особенности обучения
лоссы, метрики

- Модели https://huggingface.co/docs/transformers/model_summary#natural-language-processing

  - [v] Encoder

    - [v] BERT, bidirectional encoder representation for transformers
      google 2018, decoder-only
      tasks
      masked lm
      next sentence prediction
    - [v] RoBERTa
      случайное маскирование
      более толстые batch-и
      убрали next sentence prediction
    - [v] DistilBERT
      уменьшенная модель, обученная подражать оригинальному BERT
      в 2 раза худее, шустрее, 95% perf от ориигинала по бенчмарку GLUE
    - [v] ALBERT
      уменьшает потребление памяти по ср с BERT
      якобы лучше масштабируется по длине эмбеддинга
      - шарит веса
      - распиливает матрицу embedding на 2 меньших матрицы (уменьшение ранга?)
    - [v] DeBERTa
      основана на RoBERTa, обучается в 2 раза быстрее
      матрицы эмбеддинга и позиционные энкодинги не суммируются, внимание
      действует на них по отдельности.
    - [v] Longformer
      основан на RoBERTa
      разреженная матрица внимания - локальное окно + избирательное внимание
      от особых токенов (напр [CLS]) и к особым токенам

  - Decoder

    - [v] GPT-2
      чистый декодер, обученный на большом наборе данных
      мешает отсутствие двустороннего контекста
    - [v] XLNet
      1. Утверждается, что BERT считает пресдказываемые маскированные
        токены независимыми друг от друга, в отличие от AutoRegressive
        моделей, напр GPT
      2. С другой стороны, AutoRegressive модель не может видеть двусторонний
        контекст
      - XLNet должна угадывать след. маскированный токен при всех возможных
        перестановках порядка маскированных токенов
        - используется словосочеткние permutations of factorization order
          я это понимаю так, что имеется в виду P(t1, ..., tn) = Product(P(tk | t1, ..., tk-1))
      - Не имеет ограничения длины
    - [ ] GPT-J Аналог GPT2
    - [v] OPT Open Pre-trained Transformer LM, Meta. Open-source аналоги GPT3
      архитектура - копия BartDecoder
    - [v] BLOOM
      Архитектура GPT3, обучен на 40 языках + 13 языков программирования

  - Encoder-Decoder
    - [v] BART
      - заменяет несколько пропущенных токенов 1м токеном маски
      - применяет некоторые другие схемы искажения исходного текста, напр перестановки
      - Якобы лучше RoBERTа на abstractive dialogue summarization, generative Question Answering, summarization
    - [v] Pegasus
      - Похож на BART
      - якобы превосходит его на задаче summarization
      - Traning objective
        - включает обычный masked language modeling
        - Маскирует целые предложения, чтобы training objective был ближе к summarization
    - [v] T5
      - Задача формулируется в виде префикса `summarize:`, `translate English to German:`
      - Обучен на Glue, SuperGlue (размеченные dataset) + self-supervised сбросить и восстановить 15% токенов

  - OpenAI
    - [ ] Ada универсальная модель генерации embedding-ов для ChatGPT
  - META
   - [ ] LLAMA очень большая, до 65B параметров. Обычная авто-регрессионная
     модель, обучена без учителя.

- Бенчмарки
  - [v] GLUE, Super GLUE
    The General Language Understanding Evaluation
    задача NLI Natural Language Inference
      2е предложение следует, нейтрально, противоречит 1му
    Примеры категоризированы по механизму языка, необходимому для правильного
    ответа
    Super GLUE усложняет задачи
  - [v] RACE
    Large-scale ReAding Comprehension Dataset From Examinations
    вопросы на понимание англ языка для китайских студентов
    в датасете повышена доля вопросов, требующих рассуждения
  - [v] SQuAD
    Stanford Question Answering Dataset
    вопросы про вики, ответ - отрезок текста или утверждение, что ответа в тексте нет
    100,000 штук
    SQuAD 2.0 добавляет 50,000 вопросов без ответа

- [ ] Метрики
  - [v] bleu
    n-gram presision + penalty for too short
  - [v] ROUGE
    Recall-Oriented Understudy for Gisting Evaluation
    Оценивает качество seq2seq, напр MT, Summarization
    Принимает на вход задачу и 1 или более эталонных человеческих ответов
    https://en.wikipedia.org/wiki/ROUGE_(metric)
    Различаются варианты ROUGE, напр ROUGE-2 считатет совпадение 2-грамм
  - [v] METEOR учитывает Recall, учитывает синонимы

- loss
  - [v] Cross-entropy loss https://youtu.be/p4ZZq0736Po?t=2511
    Для 1 наблюдения `- Sum(y_true[i] * log(y_pred[i]))`
    где `i` указывает на номер класса, который мы предсказываем
    где `y_pred[i]` - предсказанная вероятность класса `i`
    `y_true[i]` - one-hot 1 или 0 из разметки, `=1` на позиции `[i]`, указывающей
    на истинный класс в обучающих данных
    Полная кросс-энтропия суммируется по всем наблюдениям

  - [v] perplexity
    https://thegradient.pub/understanding-evaluation-metrics-for-language-models/
    По сути exp(cross-entropy)
    Корректно определена для causal LM, т.е. несовместима с encoder-only
    моделями, типа BART

  - [v] softmax
    экспонента вектора, нормирована на свою сумму

  - [v] beam search https://youtu.be/wzfWHP6SXxY?list=PLoROMvodv4rOSH4v6133s9LFPRHjEmbmJ&t=2844
      нормализуем neg log likelihood на 1 токен (ср. арифм.), чтобы не штрафовать длинный вывод

- архитектура
  Attention is all you need https://arxiv.org/pdf/1706.03762.pdf
  - напр RNN
    - плохо параллелизуется, т.к. слои RNN должны вычисляться последовательно
      для encoder количество последовательных шагов = длина входной последовательности
  - [v] self-attention позволяет словам на любом расстоянии "взаимодействовать", т.е.
    влиять на значения одной и той же позиции
    https://youtu.be/ptuGllU5SQQ?list=PLoROMvodv4rOSH4v6133s9LFPRHjEmbmJ&t=969

  - [v] attention
    начало, на примере RNN
    https://youtu.be/wzfWHP6SXxY?list=PLoROMvodv4rOSH4v6133s9LFPRHjEmbmJ&t=4629
    https://youtu.be/gKD7jPAdbpE?list=PLoROMvodv4rOSH4v6133s9LFPRHjEmbmJ&t=119

    разработана для машинного перевода, т.е. seq2seq

    исходная проблема, мы делаем seq2seq, у нас есть encoder-decoder, каждый из
    них RNN.

    encoder генерирует embedding-и source последовательности

    decoder генерирует target последовательность

    embedding последнего токена encoder подаётся на вход decoder-у

    attention позволяет использовать эмбеддинги всех токенов исходной
    последовательности, что решает проблему "бутылочного горлышка", которым
    является последний эмбеддинг decoder-а для передачи знания об ихсодной
    последовательности в encoder

    также, за счёт прямого, а не через N слоёв доступа к embedding исходной
    последовательности, мы смягчаем проблему исчезающего градиента

    дают интерпретируемость. attention-ы по сути кодируют выравнивание между
    исходным и целевым текстом

    attention output, aka context: `sum(attention[i] * embedding[i])`
    basic attention score, aka e: `[s * embedding[i], ...]`
                                     ^ скалярное произведение
      можно усложнить, добавим промежуточную матрицу

    multiplicative attention score: `s * W * embedding[i]`
      параметры матрицы W тоже learnable
      + прикольно, что мы можем выучить соответствия между измерениями s и embedding
      - кажется, что добавлять len(embedding) * len(s) матрицу слишком дорого

    reduced rank multiplicative attention
      чтобы удешевить W, мы строим её с пониженным рангом
      W = U * V, где k, перемножаемая длина U и V, задаёт ранг W
      это эквивалентно домножению s и embedding на матрицы U и V соотвественно

  - [v] self-attention

    если обычыный attention находится в encoder (генератор целевого текста)
    и смотрит на embedding-и encoder-а (эмбеддинги исходного текста)
    self-attention смотрит из decoder в сам decoder

    query, key, value это всё эмбеддинги предыдущего слоя

    Поставим цель: строить сеть как композицию self-anttetion

    Проблема 1. Не хватает информации об индексе токена, если мы поменяем 2 токена местами
    и прогоним формулу self-attention, чтобы получить значения след. слоя,
    замена мест 2х токенов пред. слоя ни на что не повлияла
    https://youtu.be/ptuGllU5SQQ?list=PLoROMvodv4rOSH4v6133s9LFPRHjEmbmJ&t=1607
    Решение 1: добавим к learnable матрицу с идеей, что выученные веса закодируют
    всё что нужно знать о позиции токенов. Размер матрицы d x T,
    где d размерность модели (длина эмбеддинга)
    где T максимальная длина входной последовательности

    Проблема 2. Отсутствие нелинейности между слоями, если мы накинем друг
    поверх друга несколько слоёв self-attention
    Решение 2. добавим нелинейности между слоями self-attention
    на позиции каждого i-того входного токена, между эмб. текущего слоя и эмб
    след слоя находится механизм self-attention. Добавим над ним feed-forward
    слой, умножение на learnable-матрицу + нелинейность (ReLU)
    - Feed Forward применяется к каждой позиции токена отдельно, все FeedForward-ы одинаковые
    - Между разными слоями параметры FeedForward-а не шарятся, только между позициями токенов.

    Проблема 3. Как использовать self-attention в encoder, если нам нельзя
    смотреть в будущее при обучении. Для RNN это достигалось автоматически.
    Мы использовали двунаправленную RNN для encoder, т.к. можно смотреть на
    исходный текст целиком, и однонаправленную RNN для decoder, таким образом
    embedding-и на позиции след. токенов не входят в выражение для пред. токенов
    Решение 3. Сделаем механизм self-attention "маскированным"
    Поправим формулу расчёта внимания так, чтобы внимание из текущего токена в будущий
    равнялось -inf
    было e: [s[k] * embedding[i], ...]
    стало если i > k, вернуть -inf

  - [v] transformer
    - [v] Блок encoder
      https://youtu.be/ptuGllU5SQQ?list=PLoROMvodv4rOSH4v6133s9LFPRHjEmbmJ&t=2523
      на входе токены
      - превращаем в token embeddings + token positional encodings
        - positional encodings это, скорее всего, кусок вектора embedding-а,
          кодирующий позицию.
      - self-attention
        как передать пред слой на self attention?
        получаем k(ey) q(ery) v(alue) из пред слоя
          k = Kx умножаем пред векторы на обучаемую матрицу извлечения ключа
          q = Qx -- запроса
          v = Vx -- значения
        - multihead attention
          https://youtu.be/ptuGllU5SQQ?list=PLoROMvodv4rOSH4v6133s9LFPRHjEmbmJ&t=2707
          распилим K, Q, V на h матриц более низкого ранга
          сделаем вычисление по attention
          склеим результаты
          чем это вообще отличается от 1 большой матрицы? мы делаем softmax
          независимо h раз
      - residual connection + layer norm
      - схема с мелкими подробностями
        https://youtu.be/ptuGllU5SQQ?list=PLoROMvodv4rOSH4v6133s9LFPRHjEmbmJ&t=3504
    - [v] Блок decoder
      - token embeddings + token positional encodings
      - masked self attention
      - cross attention смотрит на
        Z, вывод пред слоя masked self attention, чтобы домножить на Q
        H, вывод последнего блока encoder, чтобы домножить на K и V
        т.е. вывод masked self-attention используется для получения query
        key и value получаем из последнего вывода encoder-а
    - проблема: квадратичная по длине эмбеддинга цена self-attention

  - [v] Embedding - переход от токенов к векторам длины d
    https://youtu.be/p4ZZq0736Po?t=4135
    эквивалентно замене номера токена на 1-hot вектор где на i-той позиции,
    где i-номер токена, 1. Умножение 1-hot вектора на матрицу = вывод i-той
    строки матрицы

приёмы промт инженеринга

---
Написать про эксперимент с APE
Знание теории вероятностей и методов стат анализа - валидация, кросс-валидация метрики
Написать про опыт прогнозного моделирования (бот)
Написать про опыт с большими данными - Polars на основе Spark, т.к. PySpark часто упоминается
