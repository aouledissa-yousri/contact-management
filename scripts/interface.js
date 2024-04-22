function showAddContactForm() {
    document.getElementById("add-contact").hidden = false
    document.getElementById("edit-contact").hidden = true
    document.getElementById("contact-details").hidden = true
}

function showEditContactForm() {
    document.getElementById("edit-contact").hidden = false
    document.getElementById("add-contact").hidden = true
    document.getElementById("contact-details").hidden = true

    const contact = JSON.parse(localStorage.getItem(document.getElementById("contact-id").innerHTML))

    document.getElementById("name-edit").value = contact.name
    document.getElementById("email-edit").value = contact.email
    document.getElementById("phone-edit").value = contact.phone

}

