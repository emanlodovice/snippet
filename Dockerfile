FROM python:3.6

COPY ./requirements.txt /dist/requirements.txt
RUN pip install -r /dist/requirements.txt

CMD python3 /dist/manage.py runserver 0.0.0.0:8000