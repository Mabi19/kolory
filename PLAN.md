# Plan

1. Wprowadzić sRGB
    - "pewnie widzieliście #123456, ale co to znaczy?"
    - korekcja gamma aby zwiększyć wydajność
    - z powodu funkcji transferu przestrzeń sRGB jest nieliniowa, więc matematyka psuje rzeczy
        - pokazać zepsute gradienty w sRGB
        - może również zepsuty blur
2. Pokazać rozwiązanie do problemów gradientowych
    - odwrócić gammę do matematyki i ją ponownie aplikować na koniec
    - to jest ogólne rozwiązanie
    - w tym przypadku możemy użyć specjalistycznej przestrzeni kolorów: Oklab
3. Oklab
    - czym jest przestrzeń percepcyjna: interpretacja kolorów przez mózg
    - nieregularna dystrybucja barw i jasności w HSV?
    - pokazać szybko zamianę z sRGB na Oklab

## Uwagi
- LMS w konwersji do Oklab to nie jest dokładnie standardowy LMS.

## Źródła
- https://bottosson.github.io/posts/oklab/
