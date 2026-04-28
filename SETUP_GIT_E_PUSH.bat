@echo off
chcp 65001 >nul
echo.
echo ============================================
echo   vStack Site - Setup Git e Push GitHub
echo ============================================
echo.

:: Navegar para o diretorio correto
cd /d "C:\Users\VINICIUS\Videos\MEUS PROJETOS\vstack-site"

echo [1/7] Diretorio atual:
cd
echo.

:: Remover .git corrompido se existir
if exist ".git" (
    echo [2/7] Removendo .git anterior corrompido...
    rmdir /s /q ".git"
    echo       Removido com sucesso.
) else (
    echo [2/7] Nenhum .git anterior encontrado.
)
echo.

:: Inicializar git
echo [3/7] Inicializando repositorio git...
git init -b main
git config user.email "vsouz009@gmail.com"
git config user.name "Vinicius Sousa"
echo       Git inicializado na branch main.
echo.

:: Adicionar todos os arquivos
echo [4/7] Adicionando arquivos...
git add .
echo       Arquivos adicionados.
echo.

:: Commit inicial
echo [5/7] Fazendo commit inicial...
git commit -m "feat: projeto completo pronto para deploy - v1.0.0"
echo       Commit realizado.
echo.

:: Adicionar remote
echo [6/7] Configurando remote origin...
git remote remove origin 2>nul
git remote add origin https://github.com/Vvs2705/vstack-site.git
echo       Remote configurado: https://github.com/Vvs2705/vstack-site.git
echo.

:: Push
echo [7/7] Fazendo push para GitHub...
echo       (Pode ser solicitado login/token do GitHub)
echo.
git push -u origin main

echo.
echo ============================================
if %ERRORLEVEL% EQU 0 (
    echo   SUCESSO! Codigo enviado para o GitHub!
    echo.
    echo   Proximos passos:
    echo   1. Acesse https://vercel.com
    echo   2. Importe o repositorio Vvs2705/vstack-site
    echo   3. Adicione as variaveis de ambiente
    echo   4. Deploy!
) else (
    echo   ATENCAO: Verifique o erro acima.
    echo.
    echo   Possivel causa: autenticacao GitHub necessaria.
    echo   Use um Personal Access Token (PAT) como senha.
    echo   Crie em: https://github.com/settings/tokens
)
echo ============================================
echo.
pause
