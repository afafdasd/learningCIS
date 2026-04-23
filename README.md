# redXX-app — GitLab CI/CD Demo

## Описание
Простое веб-приложение с бэкендом на Flask и фронтендом на HTML/JS.
Развертывается автоматически через GitLab CI/CD в Docker-контейнерах.

## Структура проекта
- `backend/` — Flask API
- `frontend/` — HTML/CSS/JS + Nginx
- `docker-compose.yml` — оркестрация контейнеров
- `.gitlab-ci.yml` — CI/CD pipeline

## Требования
- Docker >= 24.x
- Docker Compose >= 2.x
- GitLab Runner с тегом `docker`

## Локальный запуск

```bash
export STUDENT_NUM=07
docker compose -p red07 up --build