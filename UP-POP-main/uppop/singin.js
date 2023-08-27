
        const host = "http://localhost:8000"
        const vue_home = new Vue({
            el: '#app',
            vuetify: new Vuetify(),
            data: () => {
                return ({
                    name: 'Vue',
                    list: [],
                    form: {},
                    search: '',
                    headers: [{
                        text: 'Username',
                        value: 'username',
                    },
                    {
                        text: 'first_name',
                        value: 'first_name',
                    },
                    {
                        text: 'last_name',
                        value: 'last_name',
                    },
                    {
                        text: 'เบอร์',
                        value: 'tel',
                    },
                    {
                        text: 'ที่อยุ๋',
                        value: 'address',
                    },
                    {
                        text: 'เพศ',
                        value: 'gender',
                    },
                    {
                        text: 'Email',
                        value: 'email',
                    },
                    {
                        text: 'status',
                        value: 'status',
                    },
                    {
                        text: 'Action',
                        value: 'action',
                    },
                ]
                })
            },
            
            methods: {
                async create() {
                    await axios.post(`${host}/users`, this.form).then(async(res) => {
                        await this.load()
                    })
                },
            },


        })
   