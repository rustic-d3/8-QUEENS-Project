FROM python:latest
WORKDIR /app
RUN pip install pygame
COPY main.py .
CMD ["python3", "main.py"]