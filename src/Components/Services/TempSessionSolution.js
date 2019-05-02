
    getSessionID = () => {
        var prevSess = []
        // Get all the previous Sessions
        Axios.get(
            'https://cors-anywhere.herokuapp.com/https://legalzoom.docassemble.community.lawyer/api/user/' + this.context.id + '/interviews?key=V9P61G3EGKFI11LOG4G25F6UQZHSFR0B'
        ).then(res_one => {
            console.log('Recieved the previous sessions as: ', res_one)
            res_one.data.map( sess => {
                prevSess.push(sess.session)
            })
            // Perform this request
            var bodyFormData = new FormData()
            bodyFormData.set('key', 'V9P61G3EGKFI11LOG4G25F6UQZHSFR0B')
            bodyFormData.set('i', 'docassemble.playground1:' + this.props.service + '.yml')
            bodyFormData.set('username', this.context.email)
            bodyFormData.set('password', this.context.password)
            Axios.post(
                'https://cors-anywhere.herokuapp.com/https://legalzoom.docassemble.community.lawyer/api/login_url', bodyFormData    
            ).then( res_two => {
                console.log(res_two.data)
                // window.open(res_two.data)
                fetch(
                    res_two.data
                ).then( resp_json => {
                    console.log('JSON', resp_json)
                    console.log('Success creating a new session for this user....', res_two)
                    Axios.get(
                        'https://cors-anywhere.herokuapp.com/https://legalzoom.docassemble.community.lawyer/api/user/' + this.context.id + '/interviews?key=V9P61G3EGKFI11LOG4G25F6UQZHSFR0B'
                    ).then(res_three => {
                        console.log('Recieved the previous sessions as: ', res_three)
                        res_three.data.map( sess => {
                            var flag = false
                            prevSess.map( pSess => {
                                if ( sess == pSess ){
                                    console.log('MUST')
                                }
                            })
                            if(!flag) {
                                console.log('Success estabilishing the session', sess)
                                this.setState({
                                    sessionId: sess,
                                    // Settle the secret here itself too
                                    secret: this.context.secret
                                })
                            }
                        })
                        this.getQuestions()
                    }).catch(err => {
                        console.log('Error getting the previous sessions: ', err)
                    })
                }).catch((err) => {
                    console.log('Error: ', err)
                })
            }).catch( err => {
                console.log('Error creating a new session for this user....', err)
            })
        }).catch(err => {
            console.log('Error getting the previous sessions: ', err)
        })
    }