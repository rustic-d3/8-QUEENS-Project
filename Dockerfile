FROM python:latest
WORKDIR /app
RUN pip install pygame
COPY . .
CMD ["python3", "main.py"]