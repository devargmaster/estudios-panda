#!/bin/bash

# Script para desarrollo local
# dev.sh

set -e

echo "🐼 Estudios Panda - Desarrollo Local"

# Colores para output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Función para mostrar ayuda
show_help() {
    echo -e "${BLUE}Uso: ./dev.sh [comando]${NC}"
    echo ""
    echo "Comandos disponibles:"
    echo "  start    - Iniciar entorno de desarrollo"
    echo "  stop     - Detener contenedores"
    echo "  build    - Construir imagen Docker"
    echo "  logs     - Mostrar logs"
    echo "  clean    - Limpiar contenedores e imágenes"
    echo "  test     - Ejecutar tests"
    echo "  shell    - Acceder al shell del contenedor"
    echo "  help     - Mostrar esta ayuda"
}

# Función para iniciar desarrollo
start_dev() {
    echo -e "${YELLOW}🚀 Iniciando entorno de desarrollo...${NC}"
    docker-compose up --build -d
    echo -e "${GREEN}✅ Aplicación disponible en http://localhost:3000${NC}"
    echo -e "${YELLOW}📋 Para ver logs: ./dev.sh logs${NC}"
}

# Función para detener
stop_dev() {
    echo -e "${YELLOW}🛑 Deteniendo contenedores...${NC}"
    docker-compose down
    echo -e "${GREEN}✅ Contenedores detenidos${NC}"
}

# Función para construir
build_dev() {
    echo -e "${YELLOW}🔨 Construyendo imagen...${NC}"
    docker-compose build --no-cache
    echo -e "${GREEN}✅ Imagen construida${NC}"
}

# Función para mostrar logs
show_logs() {
    echo -e "${YELLOW}📋 Mostrando logs...${NC}"
    docker-compose logs -f
}

# Función para limpiar
clean_dev() {
    echo -e "${YELLOW}🧹 Limpiando contenedores e imágenes...${NC}"
    docker-compose down --rmi all --volumes --remove-orphans
    docker system prune -f
    echo -e "${GREEN}✅ Limpieza completada${NC}"
}

# Función para ejecutar tests
run_tests() {
    echo -e "${YELLOW}🧪 Ejecutando tests...${NC}"
    npm run test
}

# Función para acceder al shell
access_shell() {
    echo -e "${YELLOW}🐚 Accediendo al shell del contenedor...${NC}"
    docker-compose exec estudios-panda sh
}

# Procesar argumentos
case "${1:-help}" in
    start)
        start_dev
        ;;
    stop)
        stop_dev
        ;;
    build)
        build_dev
        ;;
    logs)
        show_logs
        ;;
    clean)
        clean_dev
        ;;
    test)
        run_tests
        ;;
    shell)
        access_shell
        ;;
    help|*)
        show_help
        ;;
esac
