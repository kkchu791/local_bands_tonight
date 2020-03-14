pipeline {
     agent {
        docker {
            image 'node:latest' 
            args '-p 3000:3000' 
        }
    }
    stages {
        stage('Build') {
            steps {
                sh '''
                  sudo apk update
                  sudo apk add --update py-pip
                  sudo pip install awscli --upgrade
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
                withCredentials([usernamePassword(credentialsId: '9a98681a-2cbc-44f9-9d48-2b9cfc2c61f5', passwordVariable: 'pass', usernameVariable: 'user')])
                sh '''cd build
                      export AWS_ACCESS_KEY_ID=` echo $pass`
                      export AWS_SECRET_ACCESS_KEY=`echo $user`
		                  aws s3 cp --region us-west-2 --recursive ./ s3://test123999-march
                    '''
            }
        }
    }
}
