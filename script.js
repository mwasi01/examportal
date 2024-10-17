function navigateTo(subject) {
    // You can replace the alert with actual navigation to the specific page.
    switch(subject) {
        case 'basicNursing':
            alert('Redirecting to Basic Nursing Skills...');
            break;
        case 'anatomyPhysiology':
            alert('Redirecting to Anatomy and Physiology...');
            break;
        case 'nutritionHydration':
            alert('Redirecting to Nutrition and Hydration...');
            break;
        case 'patientRights':
            alert('Redirecting to Patient Rights and Ethics...');
            break;
        case 'communication':
            alert('Redirecting to Communication Skills...');
            break;
        case 'medicalTerminology':
            alert('Redirecting to Medical Terminology...');
            break;
        case 'infectionControl':
            alert('Redirecting to Infection Control...');
            break;
        case 'cprFirstAid':
            alert('Redirecting to CPR and First Aid...');
            break;
        case 'safetyEmergency':
            alert('Redirecting to Safety and Emergency Procedures...');
            break;
        case 'specialPopulations':
            alert('Redirecting to Care for Special Populations...');
            break;
        case 'mentalHealth':
            alert('Redirecting to Mental Health and Dementia Care...');
            break;
        case 'endOfLife':
            alert('Redirecting to End-of-Life Care...');
            break;
        case 'clinicalPracticum':
            alert('Redirecting to Clinical Practicum...');
            break;
        default:
            alert('Unknown subject');
    }
}
