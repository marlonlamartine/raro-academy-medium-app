import faker from "@faker-js/faker";
import { useEffect, useState } from "react";
import { ArticleView } from "../../ArticleView";
import apiClient from "../../../services/api-client";
import { useParams } from "react-router-dom";

type ArticleProps = {
    conteudo?: string;
    id?: number;
    resumo?: string;
    titulo?: string;
    imagem?: string;
    dataPublicacao?: Date;
    tempoLeitura?: string;
    editavel?: boolean;
    autor?: {
        id: number;
        nome: string;
        avatar: string;
    }

}

export const ArtigoPage: React.FC<ArticleProps> = (
    conteudo,
    autor
) => {

    const [article, setArticle] = useState<ArticleProps>();

    const [dataPublicacao] = useState(new Date());
    const { id } = useParams();

    useEffect(() => {
        async function loadArticle() {
            //const response = await fetch('/article.md');
            const response = await apiClient.get(`/artigos/${id}`)
            //const article = await response.text();
            setArticle(response.data);
            console.log(response.data)
        }

        loadArticle();
    }, [])

    return (
        <div>
            <ArticleView
                article={article?.conteudo}
                autor={article?.autor}
                dataPublicacao={dataPublicacao}
                tempoLeitura={'10min'}
            />
        </div>
    );
}