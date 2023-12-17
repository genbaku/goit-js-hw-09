const feedbackForm = document.querySelector('.feedback-form');
const feedbackFormState = 'feedback-form-state';

//збереження стану форми у сховище
const saveFormState = () => {
    const emailInput = feedbackForm.querySelector('[name="email"]');
    const messageTextarea = feedbackForm.querySelector('[name="message"]');
    
    const formState = {
    email: emailInput.value,
    message: messageTextarea.value,
    };

    localStorage.setItem(feedbackFormState, JSON.stringify(formState));
};

// завантаження стану форми з сховища
const loadFormState = () => {
    const savedState = localStorage.getItem(feedbackFormState);

    if (savedState) {
    const { email, message } = JSON.parse(savedState);
    const emailInput = feedbackForm.querySelector('[name="email"]');
    const messageTextarea = feedbackForm.querySelector('[name="message"]');
    emailInput.value = email;
    messageTextarea.value = message;
    }
};

loadFormState();

feedbackForm.addEventListener('input', saveFormState);

feedbackForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const emailInput = feedbackForm.querySelector('[name="email"]');
    const messageTextarea = feedbackForm.querySelector('[name="message"]');
    
    const formValues = {
    email: emailInput.value,
    message: messageTextarea.value,
    };

    // перевірка, вивід у консоль та очищення
    if (formValues.email.trim() !== '' && formValues.message.trim() !== '') {
        console.log(formValues);
        localStorage.removeItem(feedbackFormState);
        feedbackForm.reset();
    } else {
        alert('Будь ласка, заповніть обидва поля');
    }
});