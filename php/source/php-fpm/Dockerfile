FROM php:7.1-fpm
# 换成阿里的源
# RUN mv /etc/apt/sources.list /etc/apt/sources.list.bak
# COPY ./sources.list /etc/apt/sources.list
# 安装mongodb、memcached扩展
RUN apt-get update \
   && apt-get install -y libmemcached-dev zlib1g-dev \
   && pecl install memcached-3.1.3 \
   && docker-php-ext-enable memcached \
   && apt-get install -y libssl-dev \
   && apt-get autoremove -y \
   && pecl install mongodb-1.5.5 \
   && docker-php-ext-enable mongodb \
   && docker-php-ext-install pdo_mysql \
   && apt-get install -y libmcrypt-dev \
   && docker-php-ext-install mcrypt \
   && docker-php-ext-install mysqli \
   && apt-get install -y build-essential \
   && apt-get install -y libmagickcore-dev libmagickwand-dev \
   && pecl install imagick-3.4.4 \
   && docker-php-ext-enable imagick \
   && docker-php-ext-install gd \
   && pecl install zip-1.13.5 \
   && docker-php-ext-enable zip \
   && php -r "copy('https://install.phpcomposer.com/installer', 'composer-setup.php');" \
   && php composer-setup.php \
   && php -r "unlink('composer-setup.php');" \
   && mv composer.phar /usr/local/bin/composer \