# Stream

## Описание

Эта штука реализуетпотоковый шифр с использованием ключевого потока, сформированного на основе подстановок (S-блоков) и операций XOR. Пользователь может зашифровать или расшифровать текст, введя ключ вручную или сгенерировав его автоматически.

## Функционал

1. **Шифрование текста**:
   - Пользователь вводит текст для шифрования и ключ.
   - Алгоритм генерирует ключевой поток и шифрует текст побайтово.

2. **Расшифровка текста**:
   - Введенный зашифрованный текст и ключ позволяют восстановить исходный текст.

3. **Генерация ключа**:
   - Автоматическая генерация случайного 16-ричного ключа.

## Использование

1. Введите текст для шифрования в поле "Введите текст для шифрования".
2. Введите ключ вручную или нажмите "Сгенерировать ключ", чтобы создать случайный ключ.
3. Нажмите "Зашифровать", чтобы получить зашифрованный текст.
4. Чтобы расшифровать, вставьте зашифрованный текст и нажмите "Расшифровать".
5. Результат появится в поле "Результат".

## Пример работы

1. Введите текст: `Hello, World!`
2. Сгенерируйте ключ: `A1B2C3D4E5F6G7H8`
3. Нажмите "Зашифровать". Пример зашифрованного текста: `Ç¡°x¥Áj#ûÏ`.
4. Нажмите "Расшифровать", чтобы вернуть исходный текст: `Hello, World!`.

## Особенности реализации

- Генерация потока ключа основана на вращении байтов и подстановке (S-блоки).
- Побайтовая операция XOR используется для шифрования и расшифрования.
- Интерфейс позволяет вручную задавать ключ или генерировать случайный.
