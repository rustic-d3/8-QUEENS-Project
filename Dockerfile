FROM python:latest
WORKDIR /app
COPY main.py .
CMD ["python3", "main.py"]