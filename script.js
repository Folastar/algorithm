function analyzeSentence(sentence) {
    let length = 0;
    let words = 0;
    let vowels = 0;
    const vowelsSet = "aeiouAEIOU";
    
    for (let i = 0; i < sentence.length; i++) {
        const char = sentence[i];
        length++;
        
        // Check if the character is a vowel
        if (vowelsSet.includes(char)) {
            vowels++;
        }
        
        // Count words when a space is found
        if (char === ' ') {
            words++;
        }

        // Stop if the current character is a period (.)
        if (char === '.') {
            break;
        }
    }
    
}