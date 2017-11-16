let googleSpreadsheet = require('google-spreadsheet');

module.exports = {
    addRowToGoogleSheets(feedbackToAdd, cb){
        let doc = new googleSpreadsheet('17avg5XhMdx6EOwrK_95vTxbdRdOV2DUqs43T-mVQ12Y');

        let creds_json = {
            client_email: 'and-feedback@and-feedback.iam.gserviceaccount.com',
            private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQC+bXzCIqzQtfFw\nAEgkCZMKsIR/HSLV2uAkVlWSC2MrCCZYwKLkJC3NHpK8gVoWTaPwWFV1RPhBfJEu\nD+G4bpql3vepryw5AHtLGJpeHNh4W1CEMfVJx7w+iFdcYadrMH8Enn5LKqg4OKO6\n81/jbl7MFcNZzbhN/zQv49DMdoYt/vhyQRQRgwvvigyiSknUUtbqahjgLEj4qltF\nnhL958T/SShbySKDScUqmC9f9y+1EAZaFbSX0zaqW4ObiY6zfcSFQwnXI8YWN/z0\nZVebVbpldxtcvhT3JGtrAy6oKf7Zd3bvP4h1QthOsZlkzCTxtJ5clolvpVr3jF6v\ngqK2z0bvAgMBAAECggEAR5PsAyT5hHH/ULQqabFXnfr/srAG+g+NlNsGyyCQpAoq\nL84o7ExVEvbc/RI6BIwmhR8O8Ed+cU8bWw8JL0QTySloOlXn730o2u9ihuGc1JCu\nUSJeKt9y+KZTAByMy5OtCtVwb1yXYpqXoJv+fQRtiZTcmxLiph65RQ8C2vfqM7su\n7FpSqtv8AZafZ5Q962Vdi1mBAjJuwHCF9KXuIdvGyWxoUUe37DYSXN70pxr2DXPh\nr8QxTQKSUXL5vb/Neu8DpIvXwRGZRsharVXfHii4GQvNFlpOgXCqrIsV6fTI438B\no9RrPscLk/qbYCL8YMimwh9HntaELx6bQJ18WF3qAQKBgQDqVh+Ln2qg8v84IM/V\njehRXVSnIo5dwB+RiSU/nq2IUkOmMdBZpMG0voLkqlfbAFjkXnseFfnyMgA3J+lJ\nXR3eomSbD8rzDhe4k4irOtcNm5na2HgUwnzgmc/MrgummuOGLWG+U4LJ/yuW2uI4\neriU7O6OqeY2390jeHqh9pyGbwKBgQDQCDTqA/6IUUtIQFgVC5VOhxZFnmeZgkAw\na09/l72rjCuBO14tvHIBjThsFqBroG46/W8jPvIHTUHjS+QpCtbhy9hhojD/gZKL\ncWvfUaLA+PZmTQj9cao45M2DowEc/ExDstwIU6Z3fT85sUaDJzl63mT5RlZrTaHc\n92HSlyWHgQKBgQCpcTTGJLNZRdu9nhwp8r51duLrJ1WB/JXXCi/g3L/lvnYkCgj5\niOR36PmElpeIR6v/FUI48vMUaYs2Vqmc3rPmc84DQVwie6IzWJqOFbHCqSyKzdOm\nTys0zIMxIPhTs9OpBc+Ta5c6sEO4hPTmmfY12Ux14+wO6bhhGZCy5DsyCQKBgQC+\n3Zi20J1assOQccCe5nbBir2LeG9y74c3JW3WEgGqgDt2IWMiMVCkTc5jlUrwFEyu\ngNHUE695tY9rHLkkUtaeaimIQogUFOzAVXr0dPEPfhyL9cf2yK+17W8FhKvDzVOn\nlVW9qgoEfXxh0V1xfa6GJb+c2cT2RE7q7mnpDlYXgQKBgQCLh3oh9bk9DAsVKLbX\nsDopnK/zCOVqDefkJjRMbucO0LNaMfpZ3Lb4oTE0PjRhN9AyxBzLh6GlUCTyizDp\nuvqBcA8OS2UuHD6jUlIfUlPbHmBIOOdz68XqMjt7R8sRFONgJjcRlYUq911owPM/\nkzK88zq78ubaNoYB13Ub6yDiyQ==\n-----END PRIVATE KEY-----\n"
        };

        doc.useServiceAccountAuth(creds_json, () => {
            doc.addRow(1, feedbackToAdd, (err, row) => {
                if(err){
                    cb(false, row);
                }else{
                    cb(true, row);
                }
            });
        });
    }
};