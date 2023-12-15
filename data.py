import requests
import json

endpoints = [
    "https://dm-assignment-commonshare.koyeb.app/api/cars",
    "https://dm-assignment-commonshare.koyeb.app/api/cars/popular",
    "https://dm-assignment-commonshare.koyeb.app/api/cars/[slug]"
]

for i, endpoint in enumerate(endpoints, start=1):
    output_file = f"data_{i}.json"

    try:
        response = requests.get(endpoint)
        response.raise_for_status()  # Lève une exception pour les erreurs HTTP (par exemple, 404)
        data = response.json()

        # Écrit les données dans un fichier JSON
        with open(output_file, 'w') as file:
            json.dump(data, file, indent=2)

        print(f"Données de l'endpoint {i} enregistrées avec succès dans {output_file}")

    except requests.exceptions.RequestException as e:
        # Gérer les erreurs de requête
        print(f"Une erreur s'est produite pour l'endpoint {i}: {e}")
        print("Contenu de la réponse :", response.content)
