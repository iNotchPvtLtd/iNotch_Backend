
export default ({ env }) => ({
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        s3Options: {
          credentials: {
            accessKeyId: 'AKIAWXBQBGVR54M6HMNV',
            secretAccessKey: '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'
          },
          region: 'eu-north-1',
          params: {
            Bucket: 'imakesite'
          }
        }
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {}
      }
    }
  }
});