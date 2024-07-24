import React, { useEffect, useState } from 'react';

import { parseFileContent } from './utils/parseFileContent';
import { parseGridDimensions } from './utils/parseGridDimensions';
import { parseInitialPosition } from './utils/parseInitialPosition';
import { Tondeuse } from './models/Tondeuse';
import './App.css'
const processTondeuses = (lines: string[], maxX: number, maxY: number): string => {
    let results = '';
    for (let i = 1; i < lines.length; i += 2) {
        const positionLine = lines[i];
        const instructions = lines[i + 1];

        const initialPosition = parseInitialPosition(positionLine);
        if (initialPosition && instructions) {
            const [initialX, initialY, initialDirection] = initialPosition;
            const tondeuse = new Tondeuse(initialX, initialY, initialDirection, maxX, maxY);
            tondeuse.processInstructions(instructions);
            results += `Tondeuse ${Math.ceil(i / 2)}: ${tondeuse.getPosition()}\n`;
        } else {
            results += `Tondeuse ${Math.ceil(i / 2)}: Instructions ou coordonnées invalides\n`;
        }
    }
    return results;
};

const App: React.FC = () => {
    const [result, setResult] = useState<string>('');

    useEffect(() => {
        const fetchAndProcessFile = async () => {
            try {
                const response = await fetch('/tondeuse.txt');
                const data = await response.text();
                const lines = parseFileContent(data);

                if (lines.length < 3) {
                    setResult('Fichier invalide');
                    return;
                }

                const [maxX, maxY] = parseGridDimensions(lines[0]);

                const results = processTondeuses(lines, maxX, maxY);
                setResult(results);
            } catch (error) {
                console.error('Error fetching the tondeuse.txt file:', error);
                setResult('Erreur de lecture du fichier');
            }
        };

        fetchAndProcessFile();
    }, []);

    return (
        <div>
            <h1>Simulation de Tondeuse à gazon Automatique</h1>
            <pre>{result}</pre>
        </div>
    );
};

export default App;
