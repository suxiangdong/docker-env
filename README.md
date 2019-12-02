使用的开发环境
===========

## 方便使用，定义的常用命令
### docker && laravel项目
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

# python
function condaL() {
    docker exec -it condaL /bin/bash
}
