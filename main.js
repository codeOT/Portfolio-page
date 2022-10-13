function sendMend() {
    const params = {
        from_name: document.getElementById('fullName'),
        email_id: document.getElementById('email_id'),
        message: document.getElementById('message')
    }
    emailjs.send('service_vg2ry7i', 'template_jelgfz9', params).then(function(res) {
        alert('success ' + res.status)
    })
}