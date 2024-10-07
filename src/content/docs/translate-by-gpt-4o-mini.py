import os
import openai
from pathlib import Path

# Set up OpenAI API key
openai.api_key = os.getenv("OPENAI_API_KEY")

language = "Korean"
language_code = "ko"

def translate_to_language(text):
    response = openai.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {"role": "system", "content": f"You are a helpful assistant that translates to {language}."},
            {"role": "user", "content": f"Translate the following text to {language}:\n\n{text}"}
        ]
    )
    return response.choices[0].message.content.strip()

def process_mdx_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.read()

    # Translate the content
    translated_content = translate_to_language(content)

    # Write the translated content back to the file
    with open(file_path, 'w', encoding='utf-8') as file:
        file.write(translated_content)

def main():
    language_folder = Path(f'src/content/docs/{language_code}')
    
    for mdx_file in language_folder.rglob('*.mdx'):
        print(f"Translating {mdx_file}")
        process_mdx_file(mdx_file)

if __name__ == "__main__":
    main()
