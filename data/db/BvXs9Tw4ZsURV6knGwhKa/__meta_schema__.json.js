jsonjs.data['__meta_schema__'] = 
[["folder","dataset","variable","description"],["data",null,null,"Base de données principale avec les metadonnées du catalogue"],["data","alias",null,"Alias de table (metaDataset), permet de dupliquer une table en lui donnant un autre nom"],["data","alias","alias","nom de la table virtuelle"],["data","alias","id","clé primaire de l'alias"],["data","alias","table","nom de la table physique"],["data","config",null,"information générales, notamment les descriptions des différentes entitées"],["data","config","id","clé primaire d'un élément de configuration de l'app"],["data","config","value","valeur de l'élément de configuration de l'app"],["data","dataset",null,"Datasets du catalogue"],["data","dataset","data_path","emplacement du dataset"],["data","dataset","delivery_format","Format du dataset livrées (CSV, XML, ...)"],["data","dataset","description","description du dataset"],["data","dataset","end_date","fin de la période couverte par le dataset"],["data","dataset","folder_id","clé du dossier contenant le dataset"],["data","dataset","id","clé primaire du dataset"],["data","dataset","last_update_date","date de denière mise à jour du dataset"],["data","dataset","link","lien vers l'emplacement du dataset"],["data","dataset","localisation","zone géographique concernée par le dataset"],["data","dataset","manager_id","clé de l'institution gestionnaire du dataset"],["data","dataset","name","nom du dataset"],["data","dataset","nb_row","nombre de ligne dans le dataset"],["data","dataset","owner_id","clé de l'institution fournisseur du dataset"],["data","dataset","pdf","lien vers l'emplacement du pdf d'information sur le dataset"],["data","dataset","start_date","début de la période couverte par le dataset"],["data","dataset","type","type de dataset (utile pour le filtre générale)"],["data","dataset","updating_each","fréquence de mise à jour du dataset"],["data","dataset","tag_ids","clés des mots clés liés"],["data","dataset","doc_ids","clés des docs liés"],["data","doc",null,"Documentation (pdf, md) attachée a un élément"],["data","doc","dataset_id","clé du dataset"],["data","doc","entity","entité possédant le document"],["data","doc","folder_id","clé du dossier"],["data","doc","id","clé primaire du document"],["data","doc","institution_id","clé de l'institution"],["data","doc","name","nom du document"],["data","doc","path","emplacement du document"],["data","doc","type","type de document (pdf, md)"],["data","doc","last_update","timestamp unix de la dernière modification"],["data","filter",null,"Filtre général appliqué sur les données (ex. Open Data, Closed Data, …)"],["data","filter","id","clé primaire du filtre"],["data","filter","name","nom du filtre"],["data","folder",null,"Dossiers"],["data","folder","data_path","emplacement du dossier"],["data","folder","delivery_format","Format des données livrées (CSV, XML, ...)"],["data","folder","description","description du dossier"],["data","folder","end_date","fin de la période couverte par le dossier"],["data","folder","git_code","emplacement du code sur un repo GIT"],["data","folder","id","clé primaire du dossier"],["data","folder","last_update_date","date de denière mise à jour du dossier"],["data","folder","localisation","zone géographique concernée par le dossier"],["data","folder","manager_id","clé de l'institution gestionnaire du dossier"],["data","folder","metadata_path","emplacement des métadonnées du dossier"],["data","folder","name","nom du dossier"],["data","folder","owner_id","clé de l'institution fournisseur du dossier"],["data","folder","parent_id","clé du dossier contenant le dossier"],["data","folder","pdf","lien vers l'emplacement du pdf d'information sur le dossier"],["data","folder","start_date","début de la période couverte par le dossier"],["data","folder","survey_type","type de source (échantillon, registre, ...)"],["data","folder","updating_each","fréquence de mise à jour du dossier"],["data","folder","tag_ids","clés des mots clés liés"],["data","folder","doc_ids","clés des docs liés"],["data","info",null,"Information générale du catalogue, moment du dernier update"],["data","info","id","clé primaire de l'info"],["data","info","value","valeur de l'info"],["data","institution",null,"Institutions, elles peuvent êtres propriétaires ou gestionnaires de dossiers ou de datasets"],["data","institution","description","description de l'institution"],["data","institution","email","email de l'institution"],["data","institution","id","clé primaire de l'institution"],["data","institution","name","nom de l'institution"],["data","institution","parent_id","clé de l'institution parent"],["data","institution","pdf","lien vers l'emplacement du pdf d'information sur l'institution"],["data","institution","phone","numéro de téléphone de l'institution"],["data","institution","tag_ids","clés des mots clés liés"],["data","institution","doc_ids","clés des docs liés"],["data","manager",null,"Gestionnaires (alias d'institutions)"],["data","manager","id","clé primaire de l'institution en tant que gestionnaire"],["data","manager","institution_id","clé de l'institution"],["data","modality",null,"Modalité"],["data","modality","description","description de la modalité"],["data","modality","folder_id","id du dossier"],["data","modality","id","clé primaire de la modalité"],["data","modality","name","nom de la modalité"],["data","modality","type","datatype de la modalité"],["data","owner",null,"Propriétaires (alias d'institutions)"],["data","owner","id","clé primaire de l'institution en tant que fournisseur"],["data","owner","institution_id","clé de l'institution"],["data","tag",null,"Mots clés"],["data","tag","description","description du mot clé"],["data","tag","id","clé primaire du mot clé"],["data","tag","parent_id","clé du mot clé parent"],["data","tag","name","nom du mot clé"],["data","value",null,"Valeurs et leur description au sein d'une modalité"],["data","value","description","description de valeur"],["data","value","id","clé primaire de la valeur"],["data","value","modality_id","clé de la modalité"],["data","value","value","valeur"],["data","variable",null,"Variables contenues dans les datasets"],["data","variable","dataset_id","clé du dataset contenant la variable"],["data","variable","description","description de la variable"],["data","variable","id","clé primaire de la variable"],["data","variable","name","nom de la variable"],["data","variable","nb_distinct","nombre de valeurs distinctes contenues dans la variable"],["data","variable","nb_duplicate","nombre de valeurs répétées contenues dans la variable"],["data","variable","nb_missing","nombre de valeurs manquantes contenues dans la variable"],["data","variable","type","datatype de la variable"],["data","variable","original_name","nom d'origine de la variable"],["data","variable","start_date","début de la période couverte par la variable"],["data","variable","end_date","fin de la période couverte par la variable"],["data","variable","modality_ids","clé des modalités liées"],["data","variable","tag_ids","clés des mots clés liés"],["user_data",null,null,"Base de données personnelle stockée dans le navigateur web de l'utilisateur"],["user_data","favorite",null,"Elements mis en favoris par l'utilisteur"],["user_data","favorite","entity","nom de l'entité de l'element favoris"],["user_data","favorite","entity_id","id de l'élément favoris"],["user_data","favorite","id","clé primaire du favoris"],["user_data","favorite","timestamp","timestamp unix de l'ajout du favori"],["user_data","filter_active",null,"Etat de chaque filtre (actif ou non)"],["user_data","filter_active","id","clé primaire du filtre"],["user_data","filter_active","is_active","état du filtre (actif ou non)"],["user_data","log",null,"Logs produits par l'utilisateur en utilisant l'application"],["user_data","log","action","action faite par l'utilisateur"],["user_data","log","entity","entité concernée par l'action de l'utilisateur"],["user_data","log","entity_id","id de l'élément concernée par l'action de l'utilisateur"],["user_data","log","id","clé primaire du log"],["user_data","log","timestamp","timestamp unix de l'action de l'utilisateur"],["user_data","option",null,"Options définies par l'utilisateur"],["user_data","option","id","clé primaire de l'option"],["user_data","option","value","valeur de l'option"],["user_data","search_history",null,"Historique de recherche"],["user_data","search_history","entity_name","entité recherchée"],["user_data","search_history","id","clé primaire de la recherche"],["user_data","search_history","item_id","id de l'élément recherché"],["user_data","search_history","timestamp","timestamp unix du moment de la recherche"]]