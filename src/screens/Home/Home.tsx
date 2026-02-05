import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { CheckCircle2Icon, ChevronRightIcon } from "lucide-react";

export const Home = (): JSX.Element => {
  return (
    <div className="w-full min-h-screen bg-white">
      <div className="flex flex-col w-full max-w-[1280px] mx-auto">
        <nav className="flex items-center justify-between px-8 py-6 bg-white border-b border-neutral-200">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-neutral-900 rounded"></div>
            <span className="text-lg font-semibold text-neutral-900">
              OptiPro
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="#solution"
              className="text-sm font-medium text-neutral-700 hover:text-neutral-900"
            >
              Solution
            </a>
            <a
              href="#fonctionnement"
              className="text-sm font-medium text-neutral-700 hover:text-neutral-900"
            >
              Fonctionnement
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-neutral-700 hover:text-neutral-900"
            >
              Contact
            </a>
          </div>
        </nav>

        <section className="flex flex-col items-center gap-12 px-8 py-24 bg-white">
          <div className="flex flex-col items-center gap-6 max-w-[800px] text-center">
            <h1 className="text-5xl font-semibold text-neutral-900 leading-tight">
              Sites internet professionnels qui génèrent des contacts qualifiés
            </h1>
            <p className="text-xl text-neutral-600 leading-relaxed">
              Vous obtenez un site opérationnel, optimisé pour la conversion et
              connecté à vos outils métier. Sans reconstruction, sans dépendance
              technique, sans frais cachés.
            </p>
            <div className="flex items-center gap-3 text-sm text-neutral-700 bg-neutral-50 px-4 py-3 rounded-md">
              <CheckCircle2Icon className="w-5 h-5 text-neutral-900" />
              <span>
                Méthodologie éprouvée sur 40+ projets B2B - PME, artisans,
                consultants
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button
              asChild
              className="px-6 py-6 bg-neutral-900 text-white hover:bg-neutral-800 rounded-md text-base font-medium"
            >
              <a href="#contact">Parler de votre projet</a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="px-6 py-6 border-neutral-300 text-neutral-900 hover:bg-neutral-50 rounded-md text-base font-medium"
            >
              <a href="#leads">Génération de leads</a>
            </Button>
          </div>
        </section>

        <section className="flex flex-col gap-12 px-8 py-20 bg-neutral-50">
          <div className="flex flex-col gap-3 max-w-[700px]">
            <h2 className="text-3xl font-semibold text-neutral-900">
              Situations que nous rencontrons régulièrement
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-white border border-neutral-200">
              <CardContent className="p-6">
                <p className="text-base text-neutral-700 leading-relaxed">
                  Votre site existe depuis plusieurs années mais ne génère
                  aucun contact qualifié. Vous ne savez pas si le problème
                  vient du design, du référencement ou du message.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-neutral-200">
              <CardContent className="p-6">
                <p className="text-base text-neutral-700 leading-relaxed">
                  Vous utilisez plusieurs outils (site, CRM, formulaires,
                  analytics) sans vision claire de ce qui fonctionne. Les
                  données sont dispersées et exploitées manuellement.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-neutral-200">
              <CardContent className="p-6">
                <p className="text-base text-neutral-700 leading-relaxed">
                  Vous avez besoin d'une présence en ligne professionnelle mais
                  vous hésitez entre une agence coûteuse et une solution
                  automatisée sans accompagnement.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-neutral-200">
              <CardContent className="p-6">
                <p className="text-base text-neutral-700 leading-relaxed">
                  Votre concurrent direct apparaît avant vous sur Google. Vous
                  savez que cela vous coûte des opportunités mais vous ne savez
                  pas par où commencer.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-neutral-200">
              <CardContent className="p-6">
                <p className="text-base text-neutral-700 leading-relaxed">
                  Vous recevez des demandes de renseignement mais peu de
                  prospects qualifiés. Le tri manuel consomme du temps sans
                  garantie de résultat.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section
          id="solution"
          className="flex flex-col gap-12 px-8 py-20 bg-white"
        >
          <div className="flex flex-col gap-4 max-w-[700px]">
            <h2 className="text-3xl font-semibold text-neutral-900">
              Ce que nous faisons différemment
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed">
              Nous construisons des sites internet qui répondent à un objectif
              métier précis : générer des contacts qualifiés de manière fiable
              et mesurable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col gap-3">
              <h3 className="text-lg font-semibold text-neutral-900">
                Nous éliminons l'incertitude technique
              </h3>
              <p className="text-base text-neutral-600 leading-relaxed">
                Pas de dépendance à une agence. Vous gardez le contrôle total
                sur votre site et vos données. Chaque élément est documenté,
                transférable et modifiable.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="text-lg font-semibold text-neutral-900">
                Nous simplifions l'infrastructure
              </h3>
              <p className="text-base text-neutral-600 leading-relaxed">
                Un seul système connecte votre site, vos formulaires et votre
                CRM. Les données circulent automatiquement. Vous suivez ce qui
                fonctionne sans exports manuels.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="text-lg font-semibold text-neutral-900">
                Nous garantissons la fiabilité
              </h3>
              <p className="text-base text-neutral-600 leading-relaxed">
                Chaque fonctionnalité est testée avant mise en production. Le
                site fonctionne de manière prévisible. Les mises à jour
                n'interrompent pas votre activité.
              </p>
            </div>
          </div>
        </section>

        <section
          id="fonctionnement"
          className="flex flex-col gap-12 px-8 py-20 bg-neutral-50"
        >
          <div className="flex flex-col gap-4 max-w-[700px]">
            <h2 className="text-3xl font-semibold text-neutral-900">
              Comment nous procédons
            </h2>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            <Card className="flex-1 bg-white border border-neutral-200">
              <CardContent className="p-6 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-neutral-900 text-white rounded-md flex items-center justify-center font-semibold">
                    1
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900">
                    Analyse
                  </h3>
                </div>
                <p className="text-base text-neutral-600 leading-relaxed">
                  Nous identifions votre objectif métier, votre audience cible
                  et les actions que doit générer votre site. Nous auditons vos
                  outils existants et définissons les points de connexion.
                </p>
              </CardContent>
            </Card>

            <Card className="flex-1 bg-white border border-neutral-200">
              <CardContent className="p-6 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-neutral-900 text-white rounded-md flex items-center justify-center font-semibold">
                    2
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900">
                    Construction
                  </h3>
                </div>
                <p className="text-base text-neutral-600 leading-relaxed">
                  Nous développons le site, connectons vos systèmes et
                  configurons le suivi de performance. Vous validez chaque
                  étape avant passage à la suivante.
                </p>
              </CardContent>
            </Card>

            <Card className="flex-1 bg-white border border-neutral-200">
              <CardContent className="p-6 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-neutral-900 text-white rounded-md flex items-center justify-center font-semibold">
                    3
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900">
                    Mise en production
                  </h3>
                </div>
                <p className="text-base text-neutral-600 leading-relaxed">
                  Nous déployons le site en conditions réelles, vérifions le
                  bon fonctionnement de chaque intégration et vous transférons
                  la documentation complète.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="flex flex-col gap-12 px-8 py-20 bg-white">
          <div className="flex flex-col gap-4 max-w-[700px]">
            <h2 className="text-3xl font-semibold text-neutral-900">
              Résultats concrets
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex flex-col gap-2">
              <CheckCircle2Icon className="w-6 h-6 text-neutral-900" />
              <h3 className="text-lg font-semibold text-neutral-900">
                Gain de temps opérationnel
              </h3>
              <p className="text-base text-neutral-600 leading-relaxed">
                Les données circulent automatiquement entre vos outils. Plus
                besoin de ressaisie manuelle ou d'exports.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <CheckCircle2Icon className="w-6 h-6 text-neutral-900" />
              <h3 className="text-lg font-semibold text-neutral-900">
                Clarté sur la performance
              </h3>
              <p className="text-base text-neutral-600 leading-relaxed">
                Vous savez en temps réel combien de visiteurs deviennent
                contacts, et combien de contacts deviennent clients.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <CheckCircle2Icon className="w-6 h-6 text-neutral-900" />
              <h3 className="text-lg font-semibold text-neutral-900">
                Fiabilité technique
              </h3>
              <p className="text-base text-neutral-600 leading-relaxed">
                Le site fonctionne de manière prévisible. Les mises à jour sont
                maîtrisées. Vous ne dépendez pas d'un prestataire unique.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <CheckCircle2Icon className="w-6 h-6 text-neutral-900" />
              <h3 className="text-lg font-semibold text-neutral-900">
                Prévisibilité des coûts
              </h3>
              <p className="text-base text-neutral-600 leading-relaxed">
                Pas de frais cachés, pas de surcoûts liés à des modifications.
                Budget défini à l'avance, respect des délais annoncés.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <CheckCircle2Icon className="w-6 h-6 text-neutral-900" />
              <h3 className="text-lg font-semibold text-neutral-900">
                Sérénité opérationnelle
              </h3>
              <p className="text-base text-neutral-600 leading-relaxed">
                Vous vous concentrez sur votre activité pendant que votre site
                travaille pour vous de manière autonome.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <CheckCircle2Icon className="w-6 h-6 text-neutral-900" />
              <h3 className="text-lg font-semibold text-neutral-900">
                Évolutivité maîtrisée
              </h3>
              <p className="text-base text-neutral-600 leading-relaxed">
                Vous ajoutez des fonctionnalités au fil de vos besoins sans
                tout reconstruire. Le système grandit avec votre activité.
              </p>
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-12 px-8 py-20 bg-neutral-50">
          <div className="flex flex-col gap-4 max-w-[700px]">
            <h2 className="text-3xl font-semibold text-neutral-900">
              Pourquoi nous faire confiance
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white border border-neutral-200">
              <CardContent className="p-6 flex flex-col gap-3">
                <h3 className="text-lg font-semibold text-neutral-900">
                  Clients accompagnés
                </h3>
                <p className="text-base text-neutral-600 leading-relaxed">
                  PME du secteur industriel, artisans du bâtiment, consultants
                  indépendants, cabinets de conseil, entreprises de services
                  B2B. Plus de 40 projets livrés depuis 2020.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-neutral-200">
              <CardContent className="p-6 flex flex-col gap-3">
                <h3 className="text-lg font-semibold text-neutral-900">
                  Méthodologie éprouvée
                </h3>
                <p className="text-base text-neutral-600 leading-relaxed">
                  Approche structurée en trois phases, validation à chaque
                  étape, documentation systématique, transfert de compétences
                  inclus. Chaque projet suit le même processus fiable.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-neutral-200">
              <CardContent className="p-6 flex flex-col gap-3">
                <h3 className="text-lg font-semibold text-neutral-900">
                  Résultats mesurables
                </h3>
                <p className="text-base text-neutral-600 leading-relaxed">
                  Taux de conversion moyen de 3,2% sur les sites livrés (contre
                  1,8% avant refonte). Temps de traitement des demandes réduit
                  de 60% grâce à l'automatisation.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-neutral-200">
              <CardContent className="p-6 flex flex-col gap-3">
                <h3 className="text-lg font-semibold text-neutral-900">
                  Expertise technique vérifiable
                </h3>
                <p className="text-base text-neutral-600 leading-relaxed">
                  Code source documenté, architecture standard du marché,
                  compatibilité avec les principaux CRM et outils marketing.
                  Audit technique disponible sur demande.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="flex flex-col gap-12 px-8 py-20 bg-white">
          <div className="flex flex-col gap-4 max-w-[700px]">
            <h2 className="text-3xl font-semibold text-neutral-900">
              Ce qui nous différencie
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-neutral-900">
                  <th className="text-left p-4 text-base font-semibold text-neutral-900">
                    Critère
                  </th>
                  <th className="text-left p-4 text-base font-semibold text-neutral-900">
                    Solution manuelle
                  </th>
                  <th className="text-left p-4 text-base font-semibold text-neutral-900">
                    Agence web classique
                  </th>
                  <th className="text-left p-4 text-base font-semibold text-neutral-900 bg-neutral-50">
                    Notre approche
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-neutral-200">
                  <td className="p-4 text-sm text-neutral-700">
                    Temps de mise en place
                  </td>
                  <td className="p-4 text-sm text-neutral-600">
                    6 à 12 mois
                  </td>
                  <td className="p-4 text-sm text-neutral-600">3 à 6 mois</td>
                  <td className="p-4 text-sm text-neutral-900 bg-neutral-50">
                    4 à 8 semaines
                  </td>
                </tr>
                <tr className="border-b border-neutral-200">
                  <td className="p-4 text-sm text-neutral-700">
                    Connexion avec vos outils
                  </td>
                  <td className="p-4 text-sm text-neutral-600">
                    Exports manuels
                  </td>
                  <td className="p-4 text-sm text-neutral-600">
                    Sur devis séparé
                  </td>
                  <td className="p-4 text-sm text-neutral-900 bg-neutral-50">
                    Incluse et automatisée
                  </td>
                </tr>
                <tr className="border-b border-neutral-200">
                  <td className="p-4 text-sm text-neutral-700">
                    Modifications futures
                  </td>
                  <td className="p-4 text-sm text-neutral-600">
                    Vous gérez seul
                  </td>
                  <td className="p-4 text-sm text-neutral-600">
                    Facturation horaire
                  </td>
                  <td className="p-4 text-sm text-neutral-900 bg-neutral-50">
                    Tarif forfaitaire défini
                  </td>
                </tr>
                <tr className="border-b border-neutral-200">
                  <td className="p-4 text-sm text-neutral-700">
                    Dépendance technique
                  </td>
                  <td className="p-4 text-sm text-neutral-600">Aucune</td>
                  <td className="p-4 text-sm text-neutral-600">Forte</td>
                  <td className="p-4 text-sm text-neutral-900 bg-neutral-50">
                    Faible (code documenté)
                  </td>
                </tr>
                <tr className="border-b border-neutral-200">
                  <td className="p-4 text-sm text-neutral-700">
                    Suivi de performance
                  </td>
                  <td className="p-4 text-sm text-neutral-600">
                    Tableaux Excel
                  </td>
                  <td className="p-4 text-sm text-neutral-600">
                    Google Analytics seul
                  </td>
                  <td className="p-4 text-sm text-neutral-900 bg-neutral-50">
                    Dashboard métier intégré
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="flex flex-col gap-12 px-8 py-20 bg-neutral-50">
          <div className="flex flex-col gap-4 max-w-[700px]">
            <h2 className="text-3xl font-semibold text-neutral-900">
              Questions fréquentes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-white border border-neutral-200">
              <CardContent className="p-6 flex flex-col gap-3">
                <h3 className="text-lg font-semibold text-neutral-900">
                  Sécurité des données
                </h3>
                <p className="text-base text-neutral-600 leading-relaxed">
                  Vos données restent votre propriété. Hébergement en Europe
                  (France ou Allemagne), conformité RGPD par défaut, sauvegardes
                  quotidiennes, accès sécurisés. Vous pouvez exporter ou
                  supprimer vos données à tout moment.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-neutral-200">
              <CardContent className="p-6 flex flex-col gap-3">
                <h3 className="text-lg font-semibold text-neutral-900">
                  Dépendance technologique
                </h3>
                <p className="text-base text-neutral-600 leading-relaxed">
                  Le code source vous appartient. Vous pouvez faire évoluer le
                  site avec un autre prestataire ou en interne. Architecture
                  standard, documentation complète, formation incluse. Aucun
                  système propriétaire.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-neutral-200">
              <CardContent className="p-6 flex flex-col gap-3">
                <h3 className="text-lg font-semibold text-neutral-900">
                  Réversibilité
                </h3>
                <p className="text-base text-neutral-600 leading-relaxed">
                  Vous pouvez arrêter à tout moment sans perte de données.
                  Export complet de votre base, récupération du code, transfert
                  vers un autre hébergeur. Pas de clause d'exclusivité, pas de
                  verrouillage technique.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-neutral-200">
              <CardContent className="p-6 flex flex-col gap-3">
                <h3 className="text-lg font-semibold text-neutral-900">
                  Intégration avec vos outils
                </h3>
                <p className="text-base text-neutral-600 leading-relaxed">
                  Compatibilité native avec les principaux CRM (HubSpot,
                  Salesforce, Pipedrive), outils emailing (Mailchimp, Brevo) et
                  systèmes de paiement. Connexion testée avant mise en
                  production.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-neutral-200">
              <CardContent className="p-6 flex flex-col gap-3">
                <h3 className="text-lg font-semibold text-neutral-900">
                  Coûts cachés
                </h3>
                <p className="text-base text-neutral-600 leading-relaxed">
                  Tarification forfaitaire annoncée à l'avance. Hébergement et
                  maintenance inclus la première année. Pas de frais
                  d'installation, pas de coûts de licence supplémentaires. Grille
                  tarifaire claire pour les évolutions futures.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-neutral-200">
              <CardContent className="p-6 flex flex-col gap-3">
                <h3 className="text-lg font-semibold text-neutral-900">
                  Support et accompagnement
                </h3>
                <p className="text-base text-neutral-600 leading-relaxed">
                  Support technique par email sous 24h ouvrées. Documentation
                  accessible en ligne. Formation à l'utilisation incluse. Accès
                  à un interlocuteur unique pendant toute la durée du projet.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section
          id="leads"
          className="flex flex-col gap-12 px-8 py-20 bg-white border-t-2 border-neutral-200"
        >
          <div className="flex flex-col gap-4 max-w-[700px]">
            <h2 className="text-3xl font-semibold text-neutral-900">
              Génération de leads par systèmes IA
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed">
              Une fois votre site opérationnel, vous pouvez ajouter un système
              de qualification automatique des prospects. L'IA analyse chaque
              demande, qualifie le niveau d'intérêt et priorise les contacts
              selon vos critères métier.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col gap-3">
              <h3 className="text-lg font-semibold text-neutral-900">
                Fonctionnement
              </h3>
              <p className="text-base text-neutral-600 leading-relaxed">
                Le système analyse les formulaires, emails et interactions avec
                votre site. Il attribue un score de qualification basé sur des
                critères que vous définissez.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="text-lg font-semibold text-neutral-900">
                Bénéfice
              </h3>
              <p className="text-base text-neutral-600 leading-relaxed">
                Vous traitez en priorité les prospects les plus qualifiés. Votre
                équipe commerciale gagne du temps et améliore son taux de
                conversion.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="text-lg font-semibold text-neutral-900">
                Conditions
              </h3>
              <p className="text-base text-neutral-600 leading-relaxed">
                Nécessite un site fonctionnel avec un volume minimum de 50
                contacts par mois. Déploiement progressif sur 4 semaines après
                mise en production du site.
              </p>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="flex flex-col items-center gap-12 px-8 py-24 bg-neutral-900 text-white"
        >
          <div className="flex flex-col items-center gap-6 max-w-[700px] text-center">
            <h2 className="text-4xl font-semibold">
              Vérifier si cette approche correspond à votre situation
            </h2>
            <p className="text-lg text-neutral-300 leading-relaxed">
              Nous échangeons 30 minutes pour comprendre votre contexte, vos
              objectifs et la pertinence de notre méthode pour votre activité.
              Aucun engagement, aucune présentation commerciale.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button
              asChild
              className="px-8 py-6 bg-white text-neutral-900 hover:bg-neutral-100 rounded-md text-base font-medium"
            >
              <a href="mailto:contact@optipro.fr">Prendre rendez-vous</a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="px-8 py-6 border-white text-white hover:bg-white/10 rounded-md text-base font-medium"
            >
              <a href="tel:+33123456789">Nous appeler</a>
            </Button>
          </div>

          <div className="flex items-center gap-2 text-sm text-neutral-400">
            <ChevronRightIcon className="w-4 h-4" />
            <span>
              Réponse sous 24h ouvrées - Premier échange sans engagement
            </span>
          </div>
        </section>

        <footer className="flex flex-col gap-8 px-8 py-12 bg-white border-t border-neutral-200">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div className="flex flex-col gap-3 max-w-[400px]">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-neutral-900 rounded"></div>
                <span className="text-lg font-semibold text-neutral-900">
                  OptiPro
                </span>
              </div>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Sites internet professionnels et systèmes de génération de leads
                pour entreprises B2B. Approche factuelle, résultats mesurables.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="text-sm font-semibold text-neutral-900">
                Informations légales
              </h3>
              <a
                href="#mentions-legales"
                className="text-sm text-neutral-600 hover:text-neutral-900"
              >
                Mentions légales
              </a>
              <a
                href="#confidentialite"
                className="text-sm text-neutral-600 hover:text-neutral-900"
              >
                Politique de confidentialité
              </a>
              <a
                href="#cgv"
                className="text-sm text-neutral-600 hover:text-neutral-900"
              >
                Conditions générales de vente
              </a>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="text-sm font-semibold text-neutral-900">
                Contact
              </h3>
              <a
                href="mailto:contact@optipro.fr"
                className="text-sm text-neutral-600 hover:text-neutral-900"
              >
                contact@optipro.fr
              </a>
              <a
                href="tel:+33123456789"
                className="text-sm text-neutral-600 hover:text-neutral-900"
              >
                +33 1 23 45 67 89
              </a>
              <p className="text-sm text-neutral-600">
                SARL au capital de 10 000€
                <br />
                Paris, France
              </p>
            </div>
          </div>

          <div className="pt-8 border-t border-neutral-200">
            <p className="text-sm text-neutral-500 text-center">
              © 2024 OptiPro. Tous droits réservés.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};
