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
- Chciałbym ominąć CIE 1931 XYZ.
- LMS w konwersji do Oklab to nie jest dokładnie standardowy LMS.

## Źródła
- https://www.w3.org/TR/css-color-4/#hex-notation
- https://www.w3.org/Graphics/Color/sRGB.html
- https://bottosson.github.io/posts/oklab/
- https://commons.wikimedia.org/wiki/File:Cone-fundamentals-with-srgb-spectrum.svg

## Inne interesujące rzeczy które warto sprawdzić czy coś
- http://www.ericbrasseur.org/gamma.html?i=1
