class Contact {

    constructor(id, name, email, phone) {
        this.id = id
        this.name = name
        this.email = email
        this.phone = phone
    }

    getData(){
        return {
            id: this.id,
            name: this.name,
            email: this.email,
            phone: this.phone
        }
    }
}




function addContact(){

    const contact = new Contact(
        parseInt(localStorage.getItem("id")),
        document.getElementById("name").value,
        document.getElementById("email").value,
        document.getElementById("phone").value
    )

    localStorage.setItem(contact.id, JSON.stringify(contact.getData()))
    localStorage.setItem("id", parseInt(localStorage.getItem("id")) + 1)
}

function removeContact() {
    const id = document.getElementById("contact-id").innerHTML
    localStorage.removeItem(id)
    document.getElementById(id).remove()

    document.getElementById("add-contact").hidden = false
    document.getElementById("contact-details").hidden = true
}

function editContact() {

    const id = document.getElementById("contact-id").innerHTML

    const contact = new Contact(
        parseInt(id),
        document.getElementById("name-edit").value,
        document.getElementById("email-edit").value,
        document.getElementById("phone-edit").value
    )


    localStorage.setItem(contact.id, JSON.stringify(contact.getData()))

    const icon = document.createElement("div")
    icon.classList.add('fas', 'fa-user-alt')

    const name = document.createTextNode(contact.name)
    
    document.getElementById(id).innerHTML = ""
    document.getElementById(id).appendChild(icon)
    document.getElementById(id).appendChild(name)

    location.reload()


}

function loadContacts(){
    const keys = Object.keys(localStorage)

    keys.forEach(key => {
        if(!isNaN(key)) {
            const value = JSON.parse(localStorage.getItem(key))
            
            const contact = document.createElement("div")
            contact.id = value.id
            contact.classList.add("contact")

            const icon = document.createElement("div")
            icon.classList.add('fas', 'fa-user-alt')

            const name = document.createTextNode(value.name)

            contact.appendChild(icon)
            contact.appendChild(name)

            contact.addEventListener("click", () => {
                document.getElementById("add-contact").hidden = true
                document.getElementById("edit-contact").hidden = true
                document.getElementById("contact-details").hidden = false

                document.getElementById("contact-id").innerHTML = value.id
                document.getElementById("contact-name").innerHTML = "Nom: " + value.name
                document.getElementById("contact-email").innerHTML = "Email: " + value.email
                document.getElementById("contact-phone").innerHTML = "Téléphone: " + value.phone

            })

            document.getElementById("contacts").appendChild(contact) 
            document.getElementById("contacts").appendChild(document.createElement("br")) 
        }
    })
}

function clearContacts() {
    const keys = Object.keys(localStorage)

    keys.forEach(key => {
        if(!isNaN(key)) localStorage.removeItem(key)
    })

    document.getElementById("contacts").innerHTML = ""

}