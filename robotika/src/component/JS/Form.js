import '../css/Form.css'

const Form = () => {
    return (
        <div class="Register">
            <img></img>

            <div class="Form">

                <label for="fname">Full Name</label>
                <input type="text" placeholder="none" id="fname" name="fname" required ></input>
                <label for="email">Email</label>
                <input type="email" placeholder='none' id="email" name="email" required ></input>
                <label for="divisi">Divisi</label>
                <input></input>
            </div>
        </div>
    )
}

export default Form;