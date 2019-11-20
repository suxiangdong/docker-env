FROM continuumio/anaconda3
RUN apt-get update \
   && apt-get install -y vim \
   && apt-get install -y net-tools \
   && apt-get install -y inetutils-ping \
   && . /opt/conda/etc/profile.d/conda.sh \
   && conda activate base \
   && conda install django \
   # 降级openssl
   && conda install mysqlclient \
   && conda install openssl=1.0.2r \
   && conda install aiohttp \
   && conda install jinja2 \
   && pip install asyncio \
   && pip install aiomysql \