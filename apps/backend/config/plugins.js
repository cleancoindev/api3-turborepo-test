module.exports = ({ env }) => ({
    'migrations': {
        enabled: true,
        config: {
            autoStart: true,
            migrationFolderPath : 'migrations'
        },
    },
    "import-export-entries": {
        enabled: true,
    },
    upload: {
        config: {
          provider: 'cloudinary',
          providerOptions: {
            cloud_name: env('CLOUDINARY_NAME', 'guido-la-rosa'),
            api_key: env('CLOUDINARY_API_KEY', '288113754552324'),
            api_secret: env('CLOUDINARY_API_SECRET', 'rqcLRMSFDc0fYpvGhvhIP6uO5V4'),
        },
          actionOptions: {
            upload: {},
            uploadStream: {},
            delete: {},
          },
        },
    },
    ezforms:{
        config:{
          captchaProvider: {
            name: 'none',
            config: {}
          },
          notificationProviders: [
            // {
            //   name: 'notificationProvider',
            //   enabled: true,
            //   config: {}
            // }
          ]
        }
      }
})