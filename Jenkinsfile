pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh '''
		    yarn build
		    '''
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                sh '''cd build
		aws s3 cp --recursive ./ s3://test123999-march'''
            }
        }
    }
}
