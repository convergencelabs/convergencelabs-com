jekyllPod { label ->
  def containerName = "convergencelabs-com-www"

  runInNode(label) {

    stage('Jekyll Build') {
      container('jekyll') {
        sh '''
        bundle update
        bundle install
        bundle exec jekyll build
        '''
      }
    }

    stage('Docker Build') {
      container('docker') {
        dockerBuild(containerName)
      }
    }

    stage('Docker Push') {
      container('docker') {
        dockerPush(containerName, ["latest", env.GIT_COMMIT])
      }
    }
  }
}
