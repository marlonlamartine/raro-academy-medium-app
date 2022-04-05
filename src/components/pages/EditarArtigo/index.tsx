import apiClient from '../../../services/api-client';
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArticleForm } from "../../ArticleForm";
import { ArticleThumbnailProps } from "../../ArticleThumbnail/ArticleThumbnail.types";

export const EditarArtigoPage = () => {

    const navigate = useNavigate();
    const [artigo, setArtigo] = useState<ArticleThumbnailProps>();
    const { id } = useParams();
    useEffect(() => {
        if (id) {
            buscarArtigo();
        }
    }, [id]);

    async function buscarArtigo() {
        const response = await apiClient.get<ArticleThumbnailProps>(`/artigos/${id}`);
        setArtigo(response.data);
    }

    async function handleSubmit(artigo: ArticleThumbnailProps) {
        if (artigo.id) {
            const editArtigo = await apiClient.patch(`/artigos/${artigo.id}`, { ...artigo });
            navigate(`/artigo/${editArtigo.data.id}`);
        } else {
            const salvarArtigo = await apiClient.post(`/artigos/`, { ...artigo });
            navigate(`/artigo/${salvarArtigo.data.id}`);

        }
    }

    async function deletar() {
        await apiClient.delete(`/artigos/${id}`)
        navigate(`/artigos`)
    }



    return (
        <div className="items-center justify-center m-10">
            <ArticleForm article={artigo}
                onSubmitProp={handleSubmit}
                onClickProps={deletar}
            />
        </div>
    );
}