 using System;
using System.Collections.Generic;

namespace Terrasoft.Configuration.JsonModels2
{
    public class JsonSireneRoot
    {
        public SireneData sirene { get; set; }
	public Dictionary<string, AndcoData> andco { get; set; }
	}

    public class SireneData
    {
        public string Siren { get; set; }
        public string Nic { get; set; }
        public string Siret { get; set; }
        public string StatutDiffusionEtablissement { get; set; }
        public string DateCreationEtablissement { get; set; }
        public string TrancheEffectifsEtablissement { get; set; }
        public string AnneeEffectifsEtablissement { get; set; }
        public string ActivitePrincipaleRegistreMetiersEtablissement { get; set; }
        public string DateDernierTraitementEtablissement { get; set; }
        public bool? EtablissementSiege { get; set; }
        public int? NombrePeriodesEtablissement { get; set; }
        public UniteLegaleData UniteLegale { get; set; }
        public AdresseEtablissement AdresseEtablissement { get; set; }
        public Adresse2Etablissement Adresse2Etablissement { get; set; }
        public List<PeriodeEtablissement> PeriodesEtablissement { get; set; }
    }

    public class UniteLegaleData
    {
        public string EtatAdministratifUniteLegale { get; set; }
        public string StatutDiffusionUniteLegale { get; set; }
        public string DateCreationUniteLegale { get; set; }
        public string CategorieJuridiqueUniteLegale { get; set; }
        public string DenominationUniteLegale { get; set; }
        public string SigleUniteLegale { get; set; }
        public string DenominationUsuelle1UniteLegale { get; set; }
        public string DenominationUsuelle2UniteLegale { get; set; }
        public string DenominationUsuelle3UniteLegale { get; set; }
        public string SexeUniteLegale { get; set; }
        public string NomUniteLegale { get; set; }
        public string NomUsageUniteLegale { get; set; }
        public string Prenom1UniteLegale { get; set; }
        public string Prenom2UniteLegale { get; set; }
        public string Prenom3UniteLegale { get; set; }
        public string Prenom4UniteLegale { get; set; }
        public string PrenomUsuelUniteLegale { get; set; }
        public string PseudonymeUniteLegale { get; set; }
        public string ActivitePrincipaleUniteLegale { get; set; }
        public string NomenclatureActivitePrincipaleUniteLegale { get; set; }
        public string IdentifiantAssociationUniteLegale { get; set; }
        public string EconomieSocialeSolidaireUniteLegale { get; set; }
        public string SocieteMissionUniteLegale { get; set; }
        public string CaractereEmployeurUniteLegale { get; set; }
        public string TrancheEffectifsUniteLegale { get; set; }
        public string AnneeEffectifsUniteLegale { get; set; }
        public string NicSiegeUniteLegale { get; set; }
        public string DateDernierTraitementUniteLegale { get; set; }
        public string CategorieEntreprise { get; set; }
        public string AnneeCategorieEntreprise { get; set; }
    }

    public class AdresseEtablissement
    {
        public string ComplementAdresseEtablissement { get; set; }
        public string NumeroVoieEtablissement { get; set; }
        public string IndiceRepetitionEtablissement { get; set; }
        public string DernierNumeroVoieEtablissement { get; set; }
        public string IndiceRepetitionDernierNumeroVoieEtablissement { get; set; }
        public string TypeVoieEtablissement { get; set; }
        public string LibelleVoieEtablissement { get; set; }
        public string CodePostalEtablissement { get; set; }
        public string LibelleCommuneEtablissement { get; set; }
        public string LibelleCommuneEtrangerEtablissement { get; set; }
        public string DistributionSpecialeEtablissement { get; set; }
        public string CodeCommuneEtablissement { get; set; }
        public string CodeCedexEtablissement { get; set; }
        public string LibelleCedexEtablissement { get; set; }
        public string CodePaysEtrangerEtablissement { get; set; }
        public string LibellePaysEtrangerEtablissement { get; set; }
        public string IdentifiantAdresseEtablissement { get; set; }
        public string CoordonneeLambertAbscisseEtablissement { get; set; }
        public string CoordonneeLambertOrdonneeEtablissement { get; set; }
    }

    public class Adresse2Etablissement
    {
        public string ComplementAdresse2Etablissement { get; set; }
        public string NumeroVoie2Etablissement { get; set; }
        public string IndiceRepetition2Etablissement { get; set; }
        public string TypeVoie2Etablissement { get; set; }
        public string LibelleVoie2Etablissement { get; set; }
        public string CodePostal2Etablissement { get; set; }
        public string LibelleCommune2Etablissement { get; set; }
        public string LibelleCommuneEtranger2Etablissement { get; set; }
        public string DistributionSpeciale2Etablissement { get; set; }
        public string CodeCommune2Etablissement { get; set; }
        public string CodeCedex2Etablissement { get; set; }
        public string LibelleCedex2Etablissement { get; set; }
        public string CodePaysEtranger2Etablissement { get; set; }
        public string LibellePaysEtranger2Etablissement { get; set; }
    }

    public class PeriodeEtablissement
    {
        public string DateDebut { get; set; }
        public string DateFin { get; set; }
    }

    public class AndcoData
    {
        public string siret { get; set; }
        public string id_stt { get; set; }
        public string doid { get; set; }
        public string societe_stt { get; set; }
        public string societe_do { get; set; }
        public string id_liste { get; set; }
		public string code_analytique { get; set; }


        // Clé = ID du document, valeur = UserDoc
        public Dictionary<string, UserDoc> user_docs { get; set; }
    }

    public class UserDoc
    {
        public string doc_id { get; set; }
        public string libelle { get; set; }
        public string statut { get; set; }
        public string date_modification { get; set; }
        public string date_validation { get; set; }
        public string date_debut_validite { get; set; }
        public string date_peremption { get; set; }
        public string raison_refus { get; set; }
        //public string vigilance { get; set; }
    }
/*
    public class Vigilance
    {
        // Vide pour l’instant, mais défini pour éviter erreur si rempli plus tard
    }*/
}

