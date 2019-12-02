php && python 开发环境
===========
使用docker搭建平常使用的开发环境。

## 目录结构
- php（php 7.1）
  - .env 配置文件
  - source 定制镜像资源
  - log 服务日志
  - data 持久化数据
  - conf 服务配置文件
  - docker-compose.yml compose文件
- python （conda python3.7）
- shared（公共服务）

## 安装 && 使用
- install docker. See https://docs.docker.com/v17.12/install
- install docker-compose. See https://docs.docker.com/compose/install
- gcl https://github.com/composer/composer.git
- 先启动公共服务，后启动所需的环境（其他服务依赖于公共服务）。启动命令：docker-compose up （可选参数 -d ）
- （可选）为便于使用，可将以下自定义命令放入 bash | zsh 等shell中，也可自定义。

## 配置文件
- .env为服务配置文件
- source下定制镜像可自定义

## 常用命令

### for laravel
```bash
function dla() {
    project_path="/data/www/backbone"
    docker exec -it php-fpm bash -c "cd ${project_path} && php artisan ${1}"
}

function dpcli() {
    docker exec -it php-fpm /bin/bash
}

function dcopt() {
    project="backbone"
    docker exec -it composer bash -c "cd ${project} && php artisan optimize"
}
```
### for python
```bash
function condaL() {
    docker exec -it condaL /bin/bash
}
```
