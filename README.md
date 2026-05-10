<<<<<<< HEAD
# redXX-app — GitLab CI/CD Demo

## Описание
Простое веб-приложение с бэкендом на Flask и фронтендом на HTML/JS.
Развертывается автоматически через GitLab CI/CD в Docker-контейнерах.

## Структура проекта
- `backend/` — Flask API
- `frontend/` — HTML/CSS/JS + Nginx
- `docker-compose.yml` — оркестрация контейнеров
- `.gitlab-ci.yml` — CI/CD pipeline

## Настройка переменной `STUDENT_NUM` в GitLab

Каждый студент должен выполнить следующие шаги:

1. Перейти в свой репозиторий `redXX-app`
2. Открыть **Settings → CI/CD → Variables**
3. Нажать **Add variable**
4. Установить параметры:

   - **Key:** `STUDENT_NUM`
   - **Value:** `07` (укажите свой номер)
   - **Type:** `Variable`
   - **Protected:** нет
   - **Masked:** нет

5. Сохранить

## Требования
- Docker >= 24.x
- Docker Compose >= 2.x
- GitLab Runner с тегом `docker`

## Локальный запуск

```bash
export STUDENT_NUM=07
docker compose -p red07 up --build

=======
"Проект Кис"
Дроздов Арсеий Андреевич 
242 
>>>>>>> f781bf5e6a889b678b5f68a996e6406e64b21fd0
