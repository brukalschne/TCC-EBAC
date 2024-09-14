pipeline {
    agent any

    stages {
        stage('Clonar repositorio') {
            steps {
                git branch: 'main', url: 'https://github.com/brukalschne/CI-CD-API-TCC.git'
                bat 'npm install'
            }
        }
        stage('Executar testes') {
            steps {
                bat '''set NO_COLOR=1
npx cypress run'''
            }
        }
    }
}
